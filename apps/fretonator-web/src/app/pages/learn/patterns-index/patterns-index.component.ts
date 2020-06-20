import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatternFretMaps, PatternModeSelectors } from '../../../util/constants';
import { Mode } from '../../../util/types';

@Component({
  selector: 'app-patterns-index',
  templateUrl: './patterns-index.component.html',
  styleUrls: ['./patterns-index.component.scss']
})
export class PatternsIndexComponent implements OnInit {
  @Output() expandFretboard = new EventEmitter<MouseEvent>();
  modeSelectors = PatternModeSelectors;
  selectedMode = Mode.ionian;
  selectedFretMap = PatternFretMaps.ionian;
  modesRequiringExpansion = [
    Mode.mixolydian,
    Mode.aolian,
    Mode.locrian
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  setPattern(mode: Mode) {
    this.selectedMode = mode;
    this.selectedFretMap = PatternFretMaps[mode];

    if (this.modesRequiringExpansion.indexOf(mode) > -1) {
      this.expandFretboardHere();
    }
  }

  expandFretboardHere() {
    //JIM I JUST CANNOT WORK OUT WHERE TO PUT THIS DIRECTIVE
    // IS IT ON THE INSTANCE OF FRETBOARD ON PATTERNS-INDEX?
    // IS IN IN THE FRETBOARD HTML?
    this.expandFretboard.emit();
  }
}
