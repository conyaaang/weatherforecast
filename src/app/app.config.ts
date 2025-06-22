import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';  // ✅ import your full routes array from app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // ✅ use your actual routes
    provideAuth0({
      domain: 'dev-vtfkjb5pwfpa287m.us.auth0.com',
      clientId: 'uLS7lllT5jhOCKNFTzjy6fOacZIhKVda',
      authorizationParams: {
        redirect_uri: window.location.origin,
        response_type: 'code',
        scope: 'openid profile email'
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    })
  ]
};


      