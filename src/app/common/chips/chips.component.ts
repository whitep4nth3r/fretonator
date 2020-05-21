import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipsComponent),
    multi: true,
  }],
})
export class ChipsComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() rounded: boolean;
  value: string | number;
  disabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange = (value: string | number) => noop

  onTouched = () => noop

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string | number) {
    this.value = value;
  }

  setDisabledState(value: boolean) {
    this.disabled = value
  }

}
