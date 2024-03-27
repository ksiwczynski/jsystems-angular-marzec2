import {
  ErrorHandler,
  EventEmitter,
  Inject,
  Injectable,
  inject,
} from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';
import { Album, AlbumSearchResponse } from './Album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  EMPTY,
  Observable,
  catchError,
  from,
  map,
  retry,
  switchMap,
  throwError,
} from 'rxjs';
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
