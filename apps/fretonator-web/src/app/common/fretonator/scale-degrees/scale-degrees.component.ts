import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scale-degrees',
  templateUrl: './scale-degrees.component.html',
  styleUrls: ['./scale-degrees.component.scss']
})
export class ScaleDegreesComponent {
  @Output() setTonicHighlight = new EventEmitter<boolean>();
  @Output() setMediantHighlight = new EventEmitter<boolean>();
  @Output() setDominantHighlight = new EventEmitter<boolean>();
  @Input() tonicActive;
  @Input() mediantActive;
  @Input() dominantActive;

  clickTonic() {
    this.setTonicHighlight.emit();
  }

  clickMediant() {
    this.setMediantHighlight.emit();
  }

  clickDominant() {
    this.setDominantHighlight.emit();
  }

}
