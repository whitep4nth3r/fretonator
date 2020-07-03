import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FretMode, Orientation } from '../fretboard/fretboard.component';

@Component({
  selector: 'app-fretboard-config',
  templateUrl: './fretboard-config.component.html',
  styleUrls: ['./fretboard-config.component.scss']
})
export class FretboardConfigComponent {
  @Input() fretMode;
  @Input() fretModes;
  @Input() orientations;
  @Input() orientation;
  @Output() setFretMode = new EventEmitter<FretMode>();
  @Output() setOrientation = new EventEmitter<Orientation>();

  setFretModeClick(fretMode: FretMode) {
    this.setFretMode.emit(fretMode);
  }

  setOrientationClick(orientation: Orientation) {
    this.setOrientation.emit(orientation);
  }
}
