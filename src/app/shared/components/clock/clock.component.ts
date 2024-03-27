import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `<div>{{ time }}</div>`,
  styles: [``],
})
export class ClockComponent {
  time = new Date().toLocaleTimeString();
}
