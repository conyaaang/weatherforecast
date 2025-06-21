import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.html',
  styleUrls: ['./navigation-bar.css']
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout(<LogoutOptions>{ returnTo: window.location.origin });
  }
}
