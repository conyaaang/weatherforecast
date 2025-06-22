import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({  
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  city = '';

  constructor(public auth: AuthService, private router: Router) {}

  displayWeather() {
    if (this.city.trim()) {
      this.router.navigate(['/weather'], {
        queryParams: { city: this.city }
      });
    }
  }
}
