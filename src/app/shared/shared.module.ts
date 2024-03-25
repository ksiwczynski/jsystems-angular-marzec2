import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';

@NgModule({
  declarations: [ClockComponent],
  imports: [MatListModule, FormsModule, CommonModule],
  exports: [MatListModule, FormsModule, CommonModule, ClockComponent],
})
export class SharedModule {}
