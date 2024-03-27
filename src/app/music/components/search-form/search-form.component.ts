import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  SharedMaterialLibs,
  SharedModule,
} from '../../../shared/shared.module';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [/* SharedModule, */ SharedMaterialLibs, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  searchForm = new FormGroup({
    query: new FormControl('batman'),
    advanced: new FormGroup({
      type: new FormControl('album'),
      markets: new FormArray([
        new FormGroup({
          code: new FormControl('PL'),
        }),
      ]),
    }),
  });
  markets = this.searchForm.get(['advanced', 'markets']) as FormArray;

  addMarket() {
    this.markets.push(
      new FormGroup({
        code: new FormControl(''),
      }),
    );
  }

  @Output() search = new EventEmitter<string>();

  submit() {
    this.search.emit(this.searchForm.value.query || '');
    // this.search.emit(this.formRef?.form.get('query')?.value);
  }
}
