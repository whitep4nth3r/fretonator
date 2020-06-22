import { Component, Input } from '@angular/core';
import { ChordMap, FretMap, Mode, ModeMap } from '../../util/types';


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
}
