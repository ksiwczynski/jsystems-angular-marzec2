import { EventEmitter, Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';
import { Album } from './Album';

@Injectable({
  providedIn: 'root', // app module (singleton)
  // providedIn: 'any', // lazy loaded
  // useValue: ...
})
export class MusicApiService {
  api_url = inject(API_URL);
  
  // constructor(@Inject(API_URL) private api_url: string) {}
  
  searchAlbums(query = 'batman') {
    // Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203
    // const api_url = inject(API_URL);
    console.log(this.api_url, query);

    return mockAlbums;
  }
}
