import { Component, Input } from '@angular/core';
import { SharedMaterialLibs } from '../../../shared/shared.module';
import { Album } from '../../../core/services/Album';
import { MusicApiService } from '../../../core/services/music-api.service';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [SharedMaterialLibs],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input({ required: true }) album!: Album;

  // constructor(@Inject(MusicApiService) api: MusicApiService){}
  constructor(private api: MusicApiService) {
    this.api.addedToCart.subscribe(id => { 
      /* ... */
      // this.cdr.detectChanges() // onPush()
    })
  }

  addToCart() {
    this.api.addAlbumToCart(this.album.id);
  }
}
