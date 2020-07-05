import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FretModes, Orientations } from '../fretboard/fretboard.component';

@Component({
  selector: 'app-fretboard-config',
  templateUrl: './fretboard-config.component.html',
  styleUrls: ['./fretboard-config.component.scss']
})
export class FretboardConfigComponent {
  @Input() fretMode;
  @Input() orientation;

  @Output() setFretMode = new EventEmitter<FretModes>();
  @Output() setOrientation = new EventEmitter<Orientations>();

  setFretModeClick(fretMode: FretModes) {
    this.setFretMode.emit(fretMode);
  }

  setOrientationClick(orientation: Orientations) {
    this.setOrientation.emit(orientation);
  }

  get FretModes() {
    return FretModes;
  }

  get Orientations() {
    return Orientations;
  }
}
