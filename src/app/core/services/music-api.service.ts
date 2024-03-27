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
  api_url = inject(API_URL);
  http = inject(HttpClient);
  oauth = inject(OAuthService);
  errorHandler = inject(ErrorHandler); // TODO: Telemetry Provider override!

  searchAlbums(query = 'batman') {
    // RECIPE
    return this.http
      .get<AlbumSearchResponse>(`${this.api_url}search`, {
        headers: {
          Authorization: 'Bearer ' + this.oauth.getAccessToken(),
        },
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(
        map((res) => res.albums.items),
        retry({
          count: 3,
          delay(error, retryCount) {
            const RETRY_STATUS_CODES = [408, 413, 429, 500, 502, 503, 504, 0];

            if (
              !(error instanceof HttpErrorResponse) ||
              RETRY_STATUS_CODES.indexOf(error.status) == -1
            )
              return throwError(() => error);

            return timer(1000 * retryCount ** 2);
          },
        }),
        catchError((error, originalObs) => {
          this.errorHandler.handleError(error);

          if (error instanceof HttpErrorResponse) {
            return throwError(() => new Error(error.error.error.message));
          }
          return throwError(() => new Error('Unexpected Error'));
        }),
      );
  }
}
