import { Component, Input } from '@angular/core';
import { SimilarModes } from '../../../util/types';

@Component({
  selector: 'app-similar-modes',
  templateUrl: './similar-modes.component.html',
  styleUrls: ['./similar-modes.component.scss']
})
export class SimilarModesComponent {
  @Input() similarModes: SimilarModes;
  @Input() modeDisplayString: string;
}
