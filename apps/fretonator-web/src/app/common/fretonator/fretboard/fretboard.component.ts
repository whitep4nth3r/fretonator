import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FretMap, Mode } from '../../../util/types';
import { NotePlaybackService } from '../../playback/note-playback.service';
import { AbstractDataService } from '../../abstract-data/abstract-data.service';
import { ScaleDegree } from '../../../util/constants';

export enum FretModes {
  twelve = 'twelve',
  twentyFour = 'twentyFour',
}

export enum Orientations {
  left = 'left',
  right = 'right',
}

const FretReturner = {
  'twelve': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  'twentyFour': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
};

const StorageKeys = {
  fretMode: 'fretonator_fretMode',
  orientation: 'fretonator_orientation'
};

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnChanges, OnInit {
  @ViewChild('fretboardContainer') fretboardContainer: ElementRef<HTMLElement>;
  @Output() loadExpandedChange = new EventEmitter<Boolean>();
  @Input() fretMap: FretMap;
  @Input() mode: Mode;
  @Input() stringNamesAreCaseSensitive = false;
  @Input() loadExpanded = false;
  @Input() configuration;
  orientation;
  fretMode;
  frets;
  highlightedDegrees = new Set<ScaleDegree>();

  constructor(public playbackService: NotePlaybackService,
              private localStorage: AbstractDataService) {
  }

  ngOnInit() {
    const _fretMode = this.localStorage.getItem(StorageKeys.fretMode);
    switch (_fretMode) {
      case 'twelve':
        this.fretMode = FretModes.twelve;
        break;
      case 'twentyFour':
        this.fretMode = FretModes.twentyFour;
        break;
      default:
        this.fretMode = FretModes.twelve;
    }

    const _orientation = this.localStorage.getItem(StorageKeys.orientation);
    switch (_orientation) {
      case 'right':
        this.orientation = Orientations.right;
        break;
      case 'left':
        this.orientation = Orientations.left;
        break;
      default:
        this.orientation = Orientations.right;
    }

    this.toggleHighlightTonic();
    this.configureFretboard();
  }

  ngOnChanges(): void {
    if (this.loadExpanded) {
      this.setFretMode(FretModes.twentyFour);
    }
  }

  get FretModes() {
    return FretModes;
  }

  get Orientations() {
    return Orientations;
  }

  get scaleDegree() {
    return ScaleDegree;
  }

  configureFretboard() {
    this.frets = FretReturner[this.fretMode];
    this.loadExpandedChange.emit(this.fretMode === FretModes.twentyFour);
  }

  setOrientation(orientation: Orientations) {
    this.orientation = orientation;
    this.localStorage.setItem(StorageKeys.orientation, this.orientation);

    this.configureFretboard();
  }

  setFretMode(fretMode: FretModes) {
    this.fretMode = fretMode;
    this.localStorage.setItem(StorageKeys.fretMode, this.fretMode);
    this.configureFretboard();
  }

  toggleHighlightTonic() {
    this.highlightedDegrees.has(ScaleDegree.tonic) ? this.highlightedDegrees.delete(ScaleDegree.tonic) : this.highlightedDegrees.add(ScaleDegree.tonic);
  }

  toggleHighlightMediant() {
    this.highlightedDegrees.has(ScaleDegree.mediant) ? this.highlightedDegrees.delete(ScaleDegree.mediant) : this.highlightedDegrees.add(ScaleDegree.mediant);
  }

  toggleHighlightDominant() {
    this.highlightedDegrees.has(ScaleDegree.dominant) ? this.highlightedDegrees.delete(ScaleDegree.dominant) : this.highlightedDegrees.add(ScaleDegree.dominant);
  }
}
