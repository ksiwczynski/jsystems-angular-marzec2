import { EventEmitter, Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';
import { Album } from './Album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  api_url = inject(API_URL);
  http = inject(HttpClient);

  searchAlbums(query = 'batman') {
    console.log(this.api_url, query);
    
    this.http.get(`${this.api_url}/search`, {
      headers: {
        // 'Authorization' : 'Bearer Placki'
      },
      params: {
        type: 'album',
        q: query,
      },
      // reportProgress:false // upload / download
    });

    return mockAlbums;
  }
}
