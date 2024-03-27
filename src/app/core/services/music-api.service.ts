import { Injectable } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = environment.api_url;

  searchAlbums(query = 'batman') {
    console.log(query);

    return mockAlbums;
  }

  constructor() {}
}
