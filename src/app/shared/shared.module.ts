import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';
import { ContenteditableDirective } from './forms/contenteditable.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const SharedMaterialLibs = [
  MatListModule,
  FormsModule,
  CommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
  ],
  imports: [SharedMaterialLibs],
  exports: [
    SharedMaterialLibs,
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
