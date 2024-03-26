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

  selectedId = '';

  select(id: string) {
    this.selectedId = id;
    this.selectedIdChange.emit(id);
  }
}
