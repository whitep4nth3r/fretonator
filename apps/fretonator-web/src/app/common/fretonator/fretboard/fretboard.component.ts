import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FretMap, Mode } from '../../../util/types';
import { NotePlaybackService } from '../../playback/note-playback.service';
import { AbstractDataService } from '../../abstract-data/abstract-data.service';

export enum FretMode {
  twelve = 'twelve',
  twentyFour = 'twentyFour',
}

export enum Orientation {
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
}

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

  constructor(public playbackService: NotePlaybackService,
              private localStorage: AbstractDataService) {
  }

  ngOnInit() {
    const _fretMode = this.localStorage.getItem(StorageKeys.fretMode);
    switch (_fretMode) {
      case 'twelve':
        this.fretMode = FretMode.twelve;
        break;
      case 'twentyFour':
        this.fretMode = FretMode.twentyFour;
        break;
      default:
        this.fretMode = FretMode.twelve;
    }

    const _orientation = this.localStorage.getItem(StorageKeys.orientation);
    switch (_orientation) {
      case 'right':
        this.orientation = Orientation.right;
        break;
      case 'left':
        this.orientation = Orientation.left;
        break;
      default:
        this.orientation = Orientation.right;
    }

    this.configureFretboard();
  }


  ngOnChanges(): void {
    if (this.loadExpanded) {
      this.setFretMode(FretMode.twentyFour);
    }
  }

  get fretModes() {
    return FretMode;
  }

  get orientations() {
    return Orientation;
  }

  configureFretboard() {
    this.frets = FretReturner[this.fretMode];
    this.loadExpandedChange.emit(this.fretMode === FretMode.twentyFour);
  }

  setOrientation(orientation: Orientation) {
    this.orientation = orientation;
    this.localStorage.setItem(StorageKeys.orientation, this.orientation);

    this.configureFretboard();
  }

  setFretMode(fretMode: FretMode) {
    this.fretMode = fretMode;
    this.localStorage.setItem(StorageKeys.fretMode, this.fretMode);
    this.configureFretboard();
  }
}
