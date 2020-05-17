import { Component, OnInit } from '@angular/core';
import { testFretMap as fretMap } from '../testFretMap';
import { NoteSymbol } from './symbol-to-note-obj.pipe';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.scss'],
})
export class HomeHomeComponent implements OnInit {
  fretMap = fretMap;
  note: NoteSymbol = NoteSymbol.c;
  mode = 'ionian';

  ngOnInit(): void {}
}
