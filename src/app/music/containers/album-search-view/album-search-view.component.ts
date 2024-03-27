import { Component, Input, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/Album';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

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
  query = '';
  api = inject(MusicApiService);

  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const queryChanges = this.route.queryParamMap.pipe(
      map((pq) => pq.get('q')),
      // filter((q): q is string => q == null),
      filter(Boolean),
    );

    queryChanges.subscribe((q) => (this.query = q));

    queryChanges.subscribe((q) => {
      this.api.searchAlbums(q).subscribe({
        next: (albums) => (this.results = albums),
        error: (error) => (this.message = error.message),
      });
    });
  }
  search(query = '') {
    // this.router.navigate(['/','music','search'])
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });
  }
}
