import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno',
  standalone: true,
})
export class YesnoPipe implements PipeTransform {
  transform(value: boolean): unknown {
    return value ? $localize`Yes` : $localize`No`;
  }
}
