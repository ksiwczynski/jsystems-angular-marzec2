import { Component, Input } from '@angular/core';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { Album } from '../../../core/services/Album';

@Component({
  selector: 'app-results-grid',
  standalone: true,
  templateUrl: './results-grid.component.html',
  styleUrl: './results-grid.component.scss',
  imports: [AlbumCardComponent],
})
export class ResultsGridComponent {
  @Input({ required: true }) results: Album[] = [];
}
