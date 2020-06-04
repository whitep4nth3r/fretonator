import { Component, Input } from '@angular/core';
import { ChordMap } from '../../../util/types';

@Component({
  selector: 'app-chord-map',
  templateUrl: './chord-map.component.html',
  styleUrls: ['./chord-map.component.scss']
})
export class ChordMapComponent {
  @Input() chordMap: ChordMap;
}
