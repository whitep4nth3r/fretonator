import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  mode: Mode = Mode.ionian;
  modeSelectorObjects = ModeSelectorObjects;
  octave = Octave;

  constructor(private title: Title) {}

  // to do meta stuff

  ngOnInit(): void {
    this.title.setTitle('Welcome | Fretonator');
  }

  selectNote(note: NoteSymbol) {
    this.note = note;
  }

  selectMode(mode: Mode) {
    this.mode = mode
  }
}
