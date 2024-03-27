import { EventEmitter, Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';
import { Album } from './Album';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  api_url = inject(API_URL);
  http = inject(HttpClient);
  oauth = inject(OAuthService);

  searchAlbums(query = 'batman') {
    return this.http.get<Album[]>(`${this.api_url}search`, {
      headers: {
        Authorization: 'Bearer ' + this.oauth.getAccessToken(),
      },
      params: {
        type: 'album',
        q: query,
      },
    });
  }
}
