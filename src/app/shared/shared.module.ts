import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';
import { ContenteditableDirective } from './forms/contenteditable.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
  ],
  imports: [MatListModule, FormsModule, CommonModule, MatButtonModule],
  exports: [
    MatListModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
