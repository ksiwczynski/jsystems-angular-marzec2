import { Component, PLATFORM_ID, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import {RossmannUiComponent, RossmannUiService} from 'rossmann-ui';

@Component({
  selector: 'app-root, .placki[sos=malinowy]',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [SharedModule, RossmannUiComponent],
})
export class AppComponent {
  title = 'JSystems Rossmann Angular';
  oauth = inject(OAuthService);

  isLoggedIn = () => this.oauth.hasValidAccessToken();

  constructor() {
    this.oauth.configure(environment.authConfig);
  }

  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (isPlatformServer(this.platformId)) {
    if (isPlatformBrowser(this.platformId)) {
      this.oauth.tryLogin();
    }
  }

  login() {
    this.oauth.initLoginFlow();
  }
}
