import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { API_URL } from './core/tokens';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { OAuthModule, provideOAuthClient } from 'angular-oauth2-oidc';
import {
  URLInterceptor,
  authInterceptor,
  errorInterceptor,
} from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // HttpClientModule,
    CoreModule,
    // SpecialClientXProvidersModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
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
    // Provider Override
    // { provide: HttpHandler, useClass: MyAwesomeHttpHandler }
    // {
    //   provide: API_URL,
    //   useValue: 'http://localhost.dev/fakeapi/',
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
