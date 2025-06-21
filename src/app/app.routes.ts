import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { WeatherComponent } from './pages/weather/weather';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
];
