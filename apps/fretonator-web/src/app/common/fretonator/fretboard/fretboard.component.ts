import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FretMap, Mode } from '../../../util/types';
import { NotePlaybackService } from '../../playback/note-playback.service';

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
  'twentyFour': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
};

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnChanges, AfterViewInit {
  @ViewChild('fretboardContainer') fretboardContainer: ElementRef<HTMLElement>;
  @Output() loadExpandedChange = new EventEmitter<Boolean>()
  @Input() fretMap: FretMap;
  @Input() mode: Mode;
  @Input() stringNamesAreCaseSensitive = false;
  @Input() loadExpanded = false;
  orientation = Orientation.left; //CHANGE BACK
  fretMode = FretMode.twelve;
  frets = FretReturner[this.fretMode] ;

  constructor(public playbackService: NotePlaybackService) {
  }

  ngAfterViewInit() {
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

    this.configureFretboard();
  }

  setFretMode(fretMode: FretMode) {
    this.fretMode = fretMode;
    this.configureFretboard();
  }
}
