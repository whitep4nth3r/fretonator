import { Component, Input, OnInit } from '@angular/core';
import { ChordMap, FretMap, Mode, Scale } from '../../util/types';

enum ScaleDegreesToggleText {
  hidden = 'What is this?',
  visible = 'Hide info'
}

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss'],
})
export class FretonatorComponent implements OnInit {
  @Input() fretMap: FretMap;
  @Input() scale: Scale;
  @Input() intervalPattern: [];
  @Input() chordMap: ChordMap;
  @Input() mode: Mode;
  frets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  showScaleDegreesInfo = false;
  scaleDegreesToggleText = ScaleDegreesToggleText.hidden;

  constructor() {}

  ngOnInit(): void {}

  toggleScaleDegreesInfo() {
    this.showScaleDegreesInfo = !this.showScaleDegreesInfo;
    this.scaleDegreesToggleText = this.showScaleDegreesInfo ? ScaleDegreesToggleText.visible : ScaleDegreesToggleText.hidden;
  }
}
