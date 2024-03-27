import { EventEmitter, Inject, Injectable } from '@angular/core';
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
  constructor(@Inject(API_URL) private api_url: string) {}

  searchAlbums(query = 'batman') {
    console.log(this.api_url, query);

    return mockAlbums;
  }

  addAlbumToCart(id: Album['id']) {
    console.log('Adding to cart ' + id);
  }
  addedToCart = new EventEmitter<Album['id']>();

}
