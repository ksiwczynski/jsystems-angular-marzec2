import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ErrorHandler, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { API_URL } from '../tokens';
import { retry, throwError, timer, catchError, EMPTY } from 'rxjs';

export const URLInterceptor: HttpInterceptorFn = (req, next) => {
  const api_url = inject(API_URL);

  // Only if not absolute URL
  if (!req.url.startsWith('http'))
    req = req.clone({
      url: api_url + req.url,
    });

  return next(req);
};

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const oauth = inject(OAuthService);

  // TODO: Only send token to configured hosts
  req = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + oauth.getAccessToken(),
    },
  });

  return next(req);
};

import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandler = inject(ErrorHandler); // TODO: Telemetry Provider override!

  const _snackBar = inject(MatSnackBar);

  return next(req).pipe(
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
      errorHandler.handleError(error);

      if (error instanceof HttpErrorResponse) {
        return throwError(() => new Error(error.error.error.message));
      }
      return throwError(() => new Error('Unexpected Error'));
    }),
    catchError((error) => {
      const bar = _snackBar.open(error.message, 'Error', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'text-500-red',
        duration: 2000,
      });
      return EMPTY;
    }),
  );
};

// Chain of responsibility Pattern

// HttpClient.next = A
// A.next = B
// B.next = C
// C.next = HttpHandler
