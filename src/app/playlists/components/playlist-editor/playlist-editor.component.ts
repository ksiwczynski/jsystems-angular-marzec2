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
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

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

  @ViewChild('nameModelRef') /* directive "exportAs" */
  nameModelRef?: NgModel;

  constructor() {
    // console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    // console.log('ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    this.nameInputRef?.nativeElement.focus();
  }
  ngAfterViewChecked(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {}

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
}
