import { Component, Input, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/Album';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

@Component({
  standalone: true,
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
  imports: [SearchFormComponent, ResultsGridComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        color: 'accent',
        hideRequiredMarker: true,
      } satisfies MatFormFieldDefaultOptions,
    },
  ],
})
export class AlbumSearchViewComponent {
  results: Album[] = [];
  message = '';
  api = inject(MusicApiService);

  search(query = '') {
    this.api.searchAlbums(query).subscribe({
      next: (albums) => (this.results = albums), // --O-->
      error: (error) => (this.message = error.error.error.message), // --X-->
      complete: () => console.log('complete'), // --|-->
    });
  }
}
