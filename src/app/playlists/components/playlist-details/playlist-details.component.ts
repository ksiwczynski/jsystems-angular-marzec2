import { Component, Input } from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {
  // @Input() playlist: Playlist = EMPTY_PLAYLIST
  // @Input() playlist?: Playlist;
  // @Input() playlist!: Playlist;

  @Input({ required: true }) playlist!: Playlist;
}
