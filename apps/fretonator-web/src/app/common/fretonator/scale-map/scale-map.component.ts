import { Component, Input, OnInit } from '@angular/core';
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
export class ScaleMapComponent implements OnInit {
  @Input() mode: Mode;
  @Input() scale: Scale;

  showscaleMapInfo = false;
  scaleDegreesToggleText = ScaleDegreesToggleText.hidden;

  constructor() { }

  ngOnInit(): void {
  }

  togglescaleMapInfo() {
    this.showscaleMapInfo = !this.showscaleMapInfo;
    this.scaleDegreesToggleText = this.showscaleMapInfo ? ScaleDegreesToggleText.visible : ScaleDegreesToggleText.hidden;
  }
}
