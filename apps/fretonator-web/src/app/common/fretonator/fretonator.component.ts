import { Component, Input } from '@angular/core';
import { ChordMap, FretMap, Mode, Scale } from '../../util/types';

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss'],
})
export class FretonatorComponent {
  @Input() fretMap: FretMap;
  @Input() scale: Scale;
  @Input() intervalMap: [];
  @Input() chordMap: ChordMap;
  @Input() mode: Mode;
  @Input() modeDisplayString: string;
  @Input() note: string;
  @Input() noteExtenderString: string;

  frets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
