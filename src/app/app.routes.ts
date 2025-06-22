import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { WeatherComponent } from './pages/weather/weather';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

