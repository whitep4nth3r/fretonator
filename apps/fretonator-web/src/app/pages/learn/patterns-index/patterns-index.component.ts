import { Component, OnInit } from '@angular/core';
import { PatternFretMaps, PatternModeSelectors } from '../../../util/constants';
import { Mode } from '../../../util/types';
import { MetaService } from '../../../common/meta/meta.service';

@Component({
  selector: 'app-patterns-index',
  templateUrl: './patterns-index.component.html',
  styleUrls: ['./patterns-index.component.scss']
})
export class PatternsIndexComponent implements OnInit {
  pageDescription = 'In order to play and Jam in all 7 of the standard modes, you only need to learn 7 patterns. These patterns always appear in the exact same order across the fretboard, regardless of the key or mode.';
  pageTitle = 'Learn the 7 scale patterns on the guitar (the 7 standard modes of the major scale)';
  pageUrl = 'https://www.fretonator.com/learn/patterns';
  modeSelectors = PatternModeSelectors;
  selectedMode = Mode.ionian;
  selectedFretMap = PatternFretMaps.ionian;
  shouldExpand = true;
  modesRequiringExpansion = [
    Mode.mixolydian,
    Mode.aolian,
    Mode.locrian
  ];

  constructor(private metaService: MetaService) {
  }

  ngOnInit(): void {
    this.metaService.updateAllGenericMeta(this.pageUrl, this.pageTitle, this.pageDescription);
  }

  setPattern(mode: Mode) {
    this.selectedMode = mode;
    this.selectedFretMap = PatternFretMaps[mode];

    if (this.modesRequiringExpansion.indexOf(mode) > -1) {
      this.shouldExpand = true;
    }
  }
}
