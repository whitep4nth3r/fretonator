import { Component, Input, OnInit } from '@angular/core';
import { ChordMap } from '../../../util/types';

@Component({
  selector: 'app-chord-map',
  templateUrl: './chord-map.component.html',
  styleUrls: ['./chord-map.component.scss']
})
export class ChordMapComponent implements OnInit {
  @Input() chordMap: ChordMap;

  constructor() { }

  ngOnInit(): void {
  }

}
