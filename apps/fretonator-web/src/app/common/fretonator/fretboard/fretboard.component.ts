import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FretMap, Mode } from '../../../util/types';
import { NotePlaybackService } from '../../playback/note-playback.service';
import { AbstractDataService } from '../../abstract-data/abstract-data.service';
import { ScaleDegrees } from '../../../util/constants';

export enum FretboardConfigurations {
  learn = 'learn'
}

export enum FretModes {
  twelve = 'twelve',
  twentyFour = 'twentyFour',
}

export enum Orientations {
  left = 'left',
  right = 'right',
}

export enum NoteDisplays {
  numbers = 'numbers',
  noteNames = 'noteNames'
}

enum Tunings {
  standard = 'standard',
  dropd = 'dropd',
  dadgad = 'dadgad'
}

//strings are in reverse order
const TuningReturner = {
  'standard': [
    { name: 'e', note: 'E', frequencyMarker: 'e' },
    { name: 'B', note: 'B', frequencyMarker: 'B' },
    { name: 'G', note: 'G', frequencyMarker: 'G' },
    { name: 'D', note: 'D', frequencyMarker: 'D' },
    { name: 'A', note: 'A', frequencyMarker: 'A' },
    { name: 'E', note: 'E', frequencyMarker: 'E' }
  ],
  'dropd': [
    { name: 'e', note: 'E', frequencyMarker: 'e' },
    { name: 'B', note: 'B', frequencyMarker: 'B' },
    { name: 'G', note: 'G', frequencyMarker: 'G' },
    { name: 'D', note: 'D', frequencyMarker: 'D' },
    { name: 'A', note: 'A', frequencyMarker: 'A' },
    { name: 'D', note: 'D', frequencyMarker: 'D_' }
  ],
  'dadgad': [
    { name: 'd', note: 'D', frequencyMarker: 'd' },
    { name: 'A', note: 'A', frequencyMarker: 'A' },
    { name: 'G', note: 'G', frequencyMarker: 'G' },
    { name: 'D', note: 'D', frequencyMarker: 'D' },
    { name: 'A', note: 'A', frequencyMarker: 'A' },
    { name: 'D', note: 'D', frequencyMarker: 'D_' }
  ]
};

const FretReturner = {
  'twelve': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  'twentyFour': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
};

const StorageKeys = {
  fretMode: 'fretonator_fretMode',
  orientation: 'fretonator_orientation',
  noteNameDisplay: 'fretonator_noteNameDisplay',
  tuning: 'fretonator_tuning'
};

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnChanges, OnInit {
  @ViewChild('fretboardContainer') fretboardContainer: ElementRef<HTMLElement>;
  @Output() loadExpandedChange = new EventEmitter<boolean>();
  @Input() fretMap!: FretMap;
  @Input() mode: Mode;
  @Input() stringNamesAreCaseSensitive = false;
  @Input() loadExpanded = false;
  @Input() configuration;
  @Input() standardTuningOnly;
  orientation;
  fretMode;
  frets;
  tuning = Tunings.standard;
  highlightedDegrees = new Set<ScaleDegrees>();
  noteNameDisplay = NoteDisplays.noteNames;
  strings = TuningReturner[Tunings.standard];

  constructor(public playbackService: NotePlaybackService,
              private localStorage: AbstractDataService) {
  }

  ngOnInit() {
    this.loadPropFromStorage(StorageKeys.fretMode, 'fretMode', FretModes.twelve);
    this.loadPropFromStorage(StorageKeys.orientation, 'orientation', Orientations.right);
    this.loadPropFromStorage(StorageKeys.noteNameDisplay, 'noteNameDisplay', NoteDisplays.noteNames);

    if (this.configuration !== FretboardConfigurations.learn) {
      this.loadPropFromStorage(StorageKeys.tuning, 'tuning', Tunings.standard);
    }

    this.toggleHighlight(ScaleDegrees.tonic);
    this.configureStrings();
    this.configureFretboard();
  }

  ngOnChanges(): void {
    if (this.loadExpanded) {
      this.setFretMode(FretModes.twentyFour);
    }
  }

  get FretboardConfigurations() {
    return FretboardConfigurations;
  }

  get FretModes() {
    return FretModes;
  }

  get Orientations() {
    return Orientations;
  }

  get ScaleDegrees() {
    return ScaleDegrees;
  }

  get NoteDisplays() {
    return NoteDisplays;
  }

  get Tunings() {
    return Tunings;
  }

  configureStrings() {
    this.strings = TuningReturner[this.tuning];
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

  setTuning(tuning: Tunings) {
    this.tuning = tuning;
    this.localStorage.setItem(StorageKeys.tuning, this.tuning);
    this.configureStrings();
  }

  toggleHighlight(degree: ScaleDegrees) {
    this.highlightedDegrees.has(degree) ? this.highlightedDegrees.delete(degree) : this.highlightedDegrees.add(degree);
  }

  toggleNoteDisplay(displayType: NoteDisplays) {
    this.noteNameDisplay = displayType;
    this.localStorage.setItem(StorageKeys.noteNameDisplay, displayType);
  }

  loadPropFromStorage<T>(storageKey: string, propName: string, defaultValue: T) {
    const value = this.localStorage.getItem(storageKey);
    this[propName] = value || defaultValue;
  }
}
