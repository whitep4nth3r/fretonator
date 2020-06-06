import { Component, OnInit } from '@angular/core';
import { cIonianFretMappings } from '../../../common/fret-map/fret-map.service.testConstants';

@Component({
  selector: 'app-patterns-index',
  templateUrl: './patterns-index.component.html',
  styleUrls: ['./patterns-index.component.scss']
})
export class PatternsIndexComponent implements OnInit {
  gIonianFretMap = [
    { string: 'E', fret: 3, displayName: 'G', degree: 'tonic' },
    { string: 'E', fret: 5, displayName: '', degree: '' },
    { string: 'E', fret: 7, displayName: '', degree: '' },
    { string: 'A', fret: 3, displayName: '', degree: '' },
    { string: 'A', fret: 5, displayName: '', degree: '' },
    { string: 'A', fret: 7, displayName: '', degree: '' },
    { string: 'D', fret: 4, displayName: '', degree: '' },
    { string: 'D', fret: 5, displayName: 'G', degree: 'tonic' },
    { string: 'D', fret: 7, displayName: '', degree: '' },
    { string: 'G', fret: 4, displayName: '', degree: '' },
    { string: 'G', fret: 5, displayName: '', degree: '' },
    { string: 'G', fret: 7, displayName: '', degree: '' },
    { string: 'B', fret: 5, displayName: '', degree: '' },
    { string: 'B', fret: 7, displayName: '', degree: '' },
    { string: 'B', fret: 8, displayName: 'G', degree: 'tonic' },
    { string: 'e', fret: 5, displayName: '', degree: '' },
    { string: 'e', fret: 7, displayName: '', degree: '' },
    { string: 'e', fret: 8, displayName: '', degree: '' },
  ];

  aDorianFretMap = [
    { string: 'E', fret: 5, displayName: '', degree: '' },
    { string: 'E', fret: 7, displayName: '', degree: '' },
    { string: 'E', fret: 8, displayName: '', degree: '' },
    { string: 'A', fret: 5, displayName: '', degree: '' },
    { string: 'A', fret: 7, displayName: '', degree: '' },
    { string: 'A', fret: 9, displayName: '', degree: '' },
    { string: 'D', fret: 5, displayName: 'G', degree: 'tonic' },
    { string: 'D', fret: 7, displayName: '', degree: '' },
    { string: 'D', fret: 9, displayName: '', degree: '' },
    { string: 'G', fret: 5, displayName: '', degree: '' },
    { string: 'G', fret: 7, displayName: '', degree: '' },
    { string: 'G', fret: 9, displayName: '', degree: '' },
    { string: 'B', fret: 7, displayName: '', degree: '' },
    { string: 'B', fret: 8, displayName: 'G', degree: 'tonic' },
    { string: 'B', fret: 10, displayName: '', degree: '' },
    { string: 'e', fret: 7, displayName: '', degree: '' },
    { string: 'e', fret: 8, displayName: '', degree: '' },
    { string: 'e', fret: 10, displayName: '', degree: '' },
  ]

  bPhrygianFretMap = [
    { string: 'E', fret: 7, displayName: '', degree: '' },
    { string: 'E', fret: 8, displayName: '', degree: '' },
    { string: 'E', fret: 10, displayName: '', degree: '' },
    { string: 'A', fret: 7, displayName: '', degree: '' },
    { string: 'A', fret: 9, displayName: '', degree: '' },
    { string: 'A', fret: 10, displayName: 'G', degree: 'tonic' },
    { string: 'D', fret: 7, displayName: '', degree: '' },
    { string: 'D', fret: 9, displayName: '', degree: '' },
    { string: 'D', fret: 10, displayName: '', degree: '' },
    { string: 'G', fret: 7, displayName: '', degree: '' },
    { string: 'G', fret: 9, displayName: '', degree: '' },
    { string: 'G', fret: 11, displayName: '', degree: '' },
    { string: 'B', fret: 8, displayName: 'G', degree: 'tonic' },
    { string: 'B', fret: 10, displayName: '', degree: '' },
    { string: 'B', fret: 12, displayName: '', degree: '' },
    { string: 'e', fret: 8, displayName: '', degree: '' },
    { string: 'e', fret: 10, displayName: '', degree: '' },
    { string: 'e', fret: 12, displayName: '', degree: '' },
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

}
