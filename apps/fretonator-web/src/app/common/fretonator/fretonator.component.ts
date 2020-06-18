import { Component, Input } from '@angular/core';
import { ChordMap, FretMap, Mode, ModeMap } from '../../util/types';
import { NotePlaybackService } from '../playback/note-playback.service';

export enum FretMode {
  twelve = 'twelve',
  twentyFour = 'twentyFour',
}

const FretReturner = {
  'twelve': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  'twentyFour': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
};

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss']
})
export class FretonatorComponent {
  @Input() fretMap: FretMap;
  @Input() modeMap: ModeMap;
  @Input() intervalMap: [];
  @Input() chordMap: ChordMap;
  @Input() mode: Mode;
  @Input() modeDisplayString: string;
  @Input() note: string;
  @Input() noteExtenderString: string;
  @Input() noteExtender: string;

  constructor(public playbackService: NotePlaybackService) {
  }

  fretMode = FretMode.twelve;
  frets = FretReturner[this.fretMode];

  get fretModes() {
    return FretMode;
  }

  setFretMode(fretMode: FretMode) {
    this.fretMode = fretMode;
    this.frets = FretReturner[fretMode];
  }
}
