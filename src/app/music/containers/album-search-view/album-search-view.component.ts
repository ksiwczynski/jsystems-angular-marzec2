import { Component, DestroyRef, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album, AlbumResponse } from '../../../core/services/Album';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  Subject,
  filter,
  map,
  share,
  shareReplay,
  switchMap,
  takeUntil,
} from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
  imports: [SearchFormComponent, ResultsGridComponent, AsyncPipe],
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
  api = inject(MusicApiService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  queryChanges = this.route.queryParamMap.pipe(
    map((pq) => pq.get('q')),
    filter(Boolean),
  );

  resultsChange = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q)),
    share(),
  );

  search(query = '') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });
  }
}
