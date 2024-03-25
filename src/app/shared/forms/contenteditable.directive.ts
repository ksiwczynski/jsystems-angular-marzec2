import { Directive, ElementRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';

// interface Placki {} // Removed during compilation

@Directive({
  selector: '[contenteditable=true][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ContenteditableDirective,
      multi: true, // InjectionToken<T[]> // -> Array<T>
    },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {
  constructor(
    // private model: NgModel,  /// <<--- Cyclical dep
    private elem: ElementRef<HTMLElement>
  ) {
    this.elem.nativeElement.contentEditable = 'false';
    console.log(elem);
  }

  writeValue(obj: any): void {
    this.elem.nativeElement.innerHTML = obj;
  }
  
  registerOnChange(fn: any): void {
    this.elem.nativeElement.addEventListener('input', (e) =>
      fn(this.elem.nativeElement.innerHTML)
    );
  }

  registerOnTouched(fn: any): void {
    this.elem.nativeElement.addEventListener('blur', (e) => fn());
  }

  setDisabledState(isDisabled: boolean): void {
    this.elem.nativeElement.contentEditable = isDisabled ? 'false' : 'true';
  }
}
