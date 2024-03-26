import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
// import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // PlatformModule,
    BrowserModule, 
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}