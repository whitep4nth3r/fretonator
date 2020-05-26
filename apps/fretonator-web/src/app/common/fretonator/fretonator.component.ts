import { Component, Input, OnInit } from '@angular/core';
import { ChordMap, FretMap, Mode, Scale } from '../../util/types';

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss'],
})
export class FretonatorComponent implements OnInit {
  @Input() fretMap: FretMap;
  @Input() scale: Scale;
  @Input() intervalPattern: [];
  @Input() chordMap: ChordMap;
  @Input() mode: Mode;
  frets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}

  ngOnInit(): void {}
}
