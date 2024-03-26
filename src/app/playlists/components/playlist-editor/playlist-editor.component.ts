import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
  viewChild,
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

  @ViewChild('playlistNameRef')
  nameInputRef?: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit');
    this.nameInputRef?.nativeElement.focus();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log('ngOnDestroy');
  }
}
