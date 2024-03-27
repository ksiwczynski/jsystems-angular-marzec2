import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';
import { ContenteditableDirective } from './forms/contenteditable.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { YesnoPipe } from './pipes/yesno.pipe';

export const SharedMaterialLibs = [
  MatListModule,
  FormsModule,
  CommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  YesnoPipe,
];

@NgModule({
  declarations: [
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  imports: [ 
    SharedMaterialLibs,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    SharedMaterialLibs,
    RouterModule,
    ClockComponent,
    ContenteditableDirective,
    PageNotFoundComponent,
    NavigationComponent,
  ],
})
export class SharedModule {}
