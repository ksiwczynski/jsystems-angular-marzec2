import { Injectable } from '@angular/core';
import { mockAlbums } from './mockAlbums';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  searchAlbums(query = 'batman') {
    console.log(query);

    return mockAlbums;
  }

  constructor() {}
}
