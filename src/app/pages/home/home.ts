import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  city = '';

  constructor(public auth: AuthService) {}

  displayWeather() {
    console.log('City entered:', this.city);
    // In the next step, navigate to the Weather screen with this city
  }
}
