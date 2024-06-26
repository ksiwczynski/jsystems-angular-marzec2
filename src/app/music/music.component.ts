import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: './music.component.scss',
})
export class MusicComponent {}

// // SCAM - Signle Component Angular Module
// @NgModule({ declarations: [MusicComponent]})
// export class MusicComponentModule {}
