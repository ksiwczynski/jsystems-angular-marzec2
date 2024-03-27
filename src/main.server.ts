import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
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
import { AppComponent } from './app/app.component';

export default function boostrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: API_URL,
        useValue: environment.api_url,
      },
      provideRouter(routes),
      // provideClientHydration(),
      // provideAnimationsAsync(),
      provideOAuthClient(),
      provideHttpClient(
        withFetch(),
        withInterceptors([
          // Transform Req/Res
          URLInterceptor,
          authInterceptor,
          errorInterceptor,
        ]),
      ),
    ],
  });
}
