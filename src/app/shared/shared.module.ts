import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [MatListModule, FormsModule, CommonModule],
  exports: [MatListModule, FormsModule, CommonModule],
})
export class SharedModule {}
