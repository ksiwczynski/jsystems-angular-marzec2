import { EventEmitter, Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from './mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';
import { Album } from './Album';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  api_url = inject(API_URL);
  http = inject(HttpClient);

  searchAlbums(query = 'batman') {

    // RECIPE - Unicast observable 1-1
    const obj: Observable<Album[]> = this.http.get<Album[]>(`${this.api_url}search`,
      {
        headers: {
          // 'Authorization' : 'Bearer Placki'
        },
        params: {
          type: 'album',
          q: query,
        },
        // reportProgress:false // upload / download
      },
    );

    // Cooking 
    const sub = obj.subscribe(console.log);
    sub.unsubscribe()
    
    // Cooking
    obj.subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });

    return mockAlbums;
  }
}
