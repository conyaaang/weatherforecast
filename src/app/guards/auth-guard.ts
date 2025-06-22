import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { combineLatest, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return combineLatest([auth.isLoading$, auth.isAuthenticated$]).pipe(
    map(([loading, isAuth]) => {
      if (!loading && !isAuth) {
        router.navigate(['/']); // Only redirect when not loading & not authenticated
        return false;
      }
      return isAuth;
    }),
    catchError(() => {
      router.navigate(['/']);
      return of(false);
    })
  );
};
