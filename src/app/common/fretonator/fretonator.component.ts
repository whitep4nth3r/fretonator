import { Component, OnInit, Input } from '@angular/core';
import { FretMap } from '../../util/types';

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss'],
})
export class FretonatorComponent implements OnInit {
  @Input() fretMap: FretMap;
  frets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}

  ngOnInit(): void {}
}
