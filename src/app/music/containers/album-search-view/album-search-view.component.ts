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
import {
  EMPTY,
  Subject,
  Subscription,
  catchError,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  takeUntil,
} from 'rxjs';

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

  destroySignal = new Subject();

  queryChanges = this.route.queryParamMap.pipe(
    map((pq) => pq.get('q')),
    filter(Boolean),
    takeUntil(this.destroySignal),
  );

  resultsChange = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q)),
    takeUntil(this.destroySignal),
  );

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChange.subscribe((res) => (this.results = res));
  }

  ngOnDestroy(): void {
    this.destroySignal.next(null);
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
