import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common'; // ✅ Add this
import { Router } from '@angular/router';        // ✅ Also needed for redirect

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule], // ✅ Register CommonModule here
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {
  constructor(public auth: AuthService, private router: Router) {
    this.auth.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/home']);
      }
    });
  }

  login(): void {
    this.auth.loginWithRedirect({
      // appState: { target: '/home' }
    });
  }
}
