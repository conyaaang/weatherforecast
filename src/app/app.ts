import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
  this.auth.isAuthenticated$.subscribe((isAuth) => {
    if (isAuth) {
      this.router.navigateByUrl('/home');
    }
  });

  this.auth.user$.subscribe(user => console.log('User:', user));
  this.auth.isAuthenticated$.subscribe(auth => console.log('Is Authenticated:', auth));

}
}
