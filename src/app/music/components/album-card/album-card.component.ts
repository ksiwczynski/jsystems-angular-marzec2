import { Component } from '@angular/core';
import { SharedMaterialLibs } from '../../../shared/shared.module';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [SharedMaterialLibs],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {}
