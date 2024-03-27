import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  constructor(@Inject(API_URL) private api_url: string) {}

  searchAlbums(query = 'batman') {
    console.log(this.api_url, query);

    return mockAlbums;
  }
}
