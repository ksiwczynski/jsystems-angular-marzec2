import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // ♪ ♫ (( d[-_-]b )) ♪ ♫
})
export class PlaylistEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Long description...',
  };

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  updateName($event: Event) {
    // this.app.tick()
    // cossiestalo.subscribe (() => this.cdr.detectChanges())

    // this.playlist.name = ($event.target as HTMLInputElement).value;

    if ($event.target instanceof HTMLInputElement) {
      this.playlist.name = $event.target.value;
    }
  }
}
