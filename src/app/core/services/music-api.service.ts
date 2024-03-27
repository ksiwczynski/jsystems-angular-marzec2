import { ErrorHandler, Injectable, inject } from '@angular/core';
import { API_URL } from '../tokens';
import { AlbumSearchResponse } from './Album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry, throwError, timer } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  http = inject(HttpClient);

  searchAlbums(query = 'batman') {
    return this.http
      .get<AlbumSearchResponse>(`search`, {
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(map((res) => res.albums.items));
  }
}
