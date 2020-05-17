import { Component, OnInit } from '@angular/core';
import { testFretMap as fretMap } from '../testFretMap';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.scss'],
})
export class HomeHomeComponent implements OnInit {
  fretMap = fretMap;
  constructor() {}

  ngOnInit(): void {}
}
