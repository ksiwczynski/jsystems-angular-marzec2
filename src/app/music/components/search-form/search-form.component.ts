import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  SharedMaterialLibs,
  SharedModule,
} from '../../../shared/shared.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [/* SharedModule, */ SharedMaterialLibs],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  // @ViewChild(NgForm)
  // formRef?: NgForm;
  
  query = '';

  @Output() search = new EventEmitter<string>();

  submit() {
    this.search.emit(this.query)
    // this.search.emit(this.formRef?.form.get('query')?.value);
  }
}
