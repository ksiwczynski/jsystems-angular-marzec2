import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';

@Component({
  standalone: true,
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
  imports: [SearchFormComponent, ResultsGridComponent],
})
export class AlbumSearchViewComponent {}
