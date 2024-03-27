import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import {
  URLInterceptor,
  authInterceptor,
  errorInterceptor,
} from './app/core/interceptors/auth.interceptor';
import { API_URL } from './app/core/tokens';
import { environment } from './environments/environment';
import routes from './app/app-routing';
import boostrap from './main.server';

boostrap();

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, {
//     // ngZone: 'noop',
//   })
//   .catch((err) => console.error(err));
