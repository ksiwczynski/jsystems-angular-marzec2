import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

NgFor;

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  playlists = [
    {
      id: '123',
      name: 'Playlist 123',
      public: true,
      description: 'Best description...',
    },
    {
      id: '234',
      name: 'Playlist 234',
      public: false,
      description: 'Long description...',
    },
    {
      id: '345',
      name: 'Playlist 345',
      public: true,
      description: 'awesome description...',
    },
  ];

  indexById(index: number, item: any) {
    return item.id;
  }
}
