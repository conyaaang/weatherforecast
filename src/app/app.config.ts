import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
// import { authGuard } from './guards/auth.guard';


// Import pages
// import { LandingComponent } from './pages/landing/landing.component';
// import { HomeComponent } from './pages/home/home.component';
// import { WeatherComponent } from './pages/weather/weather.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // { path: 'landing', component: LandingComponent },
  // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  // { path: 'weather', component: WeatherComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'landing' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),  // your routes go here
    provideAuth0({
      domain: 'dev-vtfkjb5pwfpa287m.us.auth0.com',
      clientId: 'uLS7lllT5jhOCKNFTzjy6fOacZIhKVda',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    })
  ]
};
