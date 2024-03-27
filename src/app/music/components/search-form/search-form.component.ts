import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [/* SharedModule, */ SharedMaterialLibs, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {

  @Input() set query(query: string | null) {
    this.searchForm.get('query')?.setValue(query || '');
  }

  searchForm = new FormGroup({
    query: new FormControl('batman', { nonNullable: true }),
    advanced: new FormGroup({
      type: new FormControl('album'),
      markets: new FormArray([
        new FormGroup({
          code: new FormControl('PL'),
        }),
      ]),
    }),
  });

  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    const field = this.searchForm.get('query');

    field!.valueChanges
      .pipe(
        // wait 500ms before sending
        debounceTime(500),

        // minimum 3 length
        filter((q) => q.length >= 3),

        // no duplicates
        distinctUntilChanged(),
      )
      // Multicast 1-* chaining
      .subscribe(this.search);
  }
  markets = this.searchForm.get(['advanced', 'markets']) as FormArray;

  addMarket() {
    this.markets.push(
      new FormGroup({
        code: new FormControl(''),
      }),
    );
  }

  submit() {
    this.search.emit(this.searchForm.value.query || '');
    // this.search.emit(this.formRef?.form.get('query')?.value);
  }
}
