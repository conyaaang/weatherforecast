import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {
  constructor(public auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect({
      appState: { target: '/home' } // ✅ after login, redirect to /home
    });
  }
}
