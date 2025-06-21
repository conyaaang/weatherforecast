import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {
  city = '';
  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/home' }  // this works if you have route guards
    });
  }


  displayWeather() {
    console.log('City entered:', this.city);
    // Future: call weather API here
  }
}
