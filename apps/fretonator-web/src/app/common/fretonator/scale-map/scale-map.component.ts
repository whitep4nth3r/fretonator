import { Component, Input } from '@angular/core';
import { Mode, Scale } from '../../../util/types';

enum ScaleDegreesToggleText {
  hidden = 'What is this?',
  visible = 'Hide info'
}

@Component({
  selector: 'app-scale-map',
  templateUrl: './scale-map.component.html',
  styleUrls: ['./scale-map.component.scss']
})
export class ScaleMapComponent {
  @Input() mode: Mode;
  @Input() scale: Scale;

  showScaleMapInfo = false;
  scaleDegreesToggleText = ScaleDegreesToggleText.hidden;

  toggleScaleMapInfo() {
    this.showScaleMapInfo = !this.showScaleMapInfo;
    this.scaleDegreesToggleText = this.showScaleMapInfo ? ScaleDegreesToggleText.visible : ScaleDegreesToggleText.hidden;
  }
}
