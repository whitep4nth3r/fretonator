import {Component, forwardRef, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {ChipsComponent} from '../chips.component';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() id: string;
  @Input() value: string | number;
  @Input() disabled: boolean;
  @Input() rounded: boolean;
  @Input() selectedColor: 'default' | 'grey';

  @HostBinding('attr.id') hostId = null;

  constructor(@Inject(forwardRef(() => ChipsComponent)) public chips: ChipsComponent) {
  }

  ngOnInit(): void {
  }

  onChange() {
    this.chips.writeValue(this.value);
    this.chips.onChange(this.value);
    this.chips.onTouched();
  }

  onBlur() {
    this.chips.onTouched();
  }

}
