import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FretMap, Mode } from '../../../util/types';
import { NotePlaybackService } from '../../playback/note-playback.service';
import { AbstractDataService } from '../../abstract-data/abstract-data.service';
import { ScaleDegrees } from '../../../util/constants';

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

const FretReturner = {
  'twelve': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  'twentyFour': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
};

const StorageKeys = {
  fretMode: 'fretonator_fretMode',
  orientation: 'fretonator_orientation',
  noteNameDisplay: 'fretonator_noteNameDisplay'
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
  highlightedDegrees = new Set<ScaleDegrees>();
  noteNameDisplay = NoteDisplays.noteNames;

  constructor(public playbackService: NotePlaybackService,
              private localStorage: AbstractDataService) {
  }

  ngOnInit() {
    this.loadPropFromStorage(StorageKeys.fretMode, 'fretMode', FretModes.twelve);
    this.loadPropFromStorage(StorageKeys.orientation, 'orientation', Orientations.right);
    this.loadPropFromStorage(StorageKeys.noteNameDisplay, 'noteNameDisplay', NoteDisplays.noteNames);

    this.toggleHighlight(ScaleDegrees.tonic);
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

  get ScaleDegrees() {
    return ScaleDegrees;
  }

  get NoteDisplays() {
    return NoteDisplays;
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
