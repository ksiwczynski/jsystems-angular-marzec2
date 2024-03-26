import { Component } from '@angular/core';
import { Playlist } from '../../components/playlist-list/Playlist';
import { mockPlaylists } from '../../components/playlist-list/mockPlaylists';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.scss',
})
export class PlaylistsViewComponent {
  mode: 'details' | 'editor' = 'details';

  playlists: Playlist[] = mockPlaylists;
  selected = mockPlaylists[0];
  selectedId = '';

  selectPlaylistById(id: string) {
    this.selected = this.playlists.find((p) => p.id == id)!;
  }

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }

  savePlaylist(draft: Playlist) {
    console.log('Saving', draft);
  }
}
