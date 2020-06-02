import { Component, DoCheck, Input } from '@angular/core';
import { Mode } from '../../../util/types';
import { ActivatedRoute } from '@angular/router';

export enum SelectedColor {
  default = 'default',
  grey = 'grey',
}


@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements DoCheck {
  @Input() note: string;
  @Input() noteExtender: string;
  @Input() mode: Mode;
  @Input() selectedColor: SelectedColor = SelectedColor.default;
  @Input() rounded = false;
  SelectedColor = SelectedColor;
  selected = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngDoCheck() {
    this.selected = this.isSelected(this.activatedRoute);
  }

  isSelected(activatedRoute) {
    const data = activatedRoute.snapshot.data.selected;

    if (data.note !== this.note) {
      return false;
    }

    if (data.noteExtender !== this.noteExtender) {
      return false;
    }

    if (data.mode !== this.mode) {
      return false;
    }

    return true;
  }
}
