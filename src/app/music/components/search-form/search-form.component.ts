import { Component } from '@angular/core';
import {
  SharedMaterialLibs,
  SharedModule,
} from '../../../shared/shared.module';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [/* SharedModule, */ SharedMaterialLibs],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {}
