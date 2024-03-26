import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';
import { ContenteditableDirective } from './forms/contenteditable.directive';

@NgModule({
  declarations: [
    ClockComponent, 
    ContenteditableDirective
  ],
  imports: [
    MatListModule, 
    FormsModule,
    CommonModule
  ],
  exports: [
    MatListModule,
    FormsModule,
    CommonModule,
    ClockComponent,
    ContenteditableDirective,
  ],
})
export class SharedModule {}
