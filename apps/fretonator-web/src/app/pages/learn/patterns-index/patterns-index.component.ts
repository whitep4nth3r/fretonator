import { Component, OnInit } from '@angular/core';
import { PatternFretMaps, PatternModeSelectors } from '../../../util/constants';
import { Mode } from '../../../util/types';

@Component({
  selector: 'app-patterns-index',
  templateUrl: './patterns-index.component.html',
  styleUrls: ['./patterns-index.component.scss']
})
export class PatternsIndexComponent implements OnInit {
  modeSelectors = PatternModeSelectors;
  selectedMode = Mode.ionian;
  selectedFretMap = PatternFretMaps.ionian;

  constructor() {
  }

  ngOnInit(): void {
  }

  setPattern(mode: Mode) {
    this.selectedMode = mode;
    this.selectedFretMap = PatternFretMaps[mode];
  }

}
