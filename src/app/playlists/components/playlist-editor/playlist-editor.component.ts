import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';

const EMPTY_PLAYLIST: Playlist = {
  id: '',
  name: '',
  public: false,
  description: '',
};

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // ♪ ♫ (( d[-_-]b )) ♪ ♫
})
export class PlaylistEditorComponent {
  @Input() playlist: Playlist = EMPTY_PLAYLIST;

  @Output() cancel = new EventEmitter<void>();

  @Output() save = new EventEmitter<Playlist>();

  submit() {
    this.save.emit(this.playlist);
  }
}
