import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';

@Directive({
  selector: '[contenteditable=true][ngModel]',
  providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: ContenteditableDirective,
        multi: true,
      },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {
  @HostBinding('innerHTML') // <div [innerHTML]="value"
  value = '';

  @HostListener('input', ['$event.target.innerHTML']) // <div (input)="fn()"
  onChange: any;

  @HostListener('blur')
  onBlur: any;

  @HostBinding('contentEditable')
  isDisabled: 'false' | 'true' = 'false';

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled ? 'false' : 'true';
  }
}
