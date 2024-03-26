import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {
  @Input({ required: true }) playlist!: Playlist;

  @Output() edit = new EventEmitter<void>();

  // clickEdit() {
  //   this.edit.emit();
  // }
}
