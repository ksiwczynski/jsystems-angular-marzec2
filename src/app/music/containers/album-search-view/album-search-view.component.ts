import { Component, DestroyRef, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/Album';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, filter, map, switchMap, takeUntil } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  // takeUntilDestroyed:
  // destroySignal = new Subject();
  // destroy = inject(DestroyRef).onDestroy(() => this.destroySignal.next(null));

  queryChanges = this.route.queryParamMap.pipe(
    map((pq) => pq.get('q')),
    filter(Boolean),
    takeUntilDestroyed(),
  );

  resultsChange = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q)),
    takeUntilDestroyed(),
  );

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChange.subscribe((res) => (this.results = res));
  }

  search(query = '') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });
  }
}
