import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      if (this.city) {
        this.fetchWeather(this.city);
      } else {
        this.errorMessage = 'No city specified.';
      }
    });
  }

  fetchWeather(city: string): void {
    const apiKey = environment.weatherApiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: data => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: err => {
        this.weatherData = null;
        this.errorMessage = 'Weather data not found for "' + city + '".';
      }
    });
  }

  getCurrentDate(): string {
    const today = new Date();
    return `${(today.getMonth() + 1).toString().padStart(2, '0')}/` +
      `${today.getDate().toString().padStart(2, '0')}/` +
      today.getFullYear();
  }

  toFahrenheit(celsius: number): number {
    return Math.round((celsius * 9 / 5) + 32);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}

