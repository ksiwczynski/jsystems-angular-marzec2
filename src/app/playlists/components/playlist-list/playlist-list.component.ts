import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  @Input('items') playlists: Playlist[] = [];

  @Output() selectedIdChange = new EventEmitter<string>();

  @Input() selectedId = '';

  select(id: string) {
    this.selectedIdChange.emit(id);
  }
}
