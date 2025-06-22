import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor() {
  const isRedirect = window.location.search.includes('code=') &&
                     window.location.search.includes('state=');

  this.auth.user$.subscribe(user => console.log('User:', user));
  this.auth.isAuthenticated$.subscribe(auth => console.log('Is Authenticated:', auth));

  if (isRedirect) {
    this.auth.handleRedirectCallback().subscribe({
      next: (result) => {
        console.log('Redirect callback result:', result);
        this.router.navigateByUrl(result?.appState?.target || '/home');
      },
      error: (err) => {
        console.error('Redirect Error:', err);
      }
    });
  }
}

}
