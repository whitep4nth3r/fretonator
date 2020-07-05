import { Component, Input } from '@angular/core';
import { Mode, ModeMap } from '../../../util/types';

@Component({
  selector: 'app-scale-map',
  templateUrl: './scale-map.component.html',
  styleUrls: ['./scale-map.component.scss']
})
export class ScaleMapComponent {
  @Input() mode: Mode;
  @Input() note: string;
  @Input() noteExtenderString: string;
  @Input() modeMap: ModeMap;
  @Input() isTheoretical: boolean;
  @Input() modeDisplayString: string;
}
