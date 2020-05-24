import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  noteExtender: '#' | '_' | '' = '';
  mode: Mode = Mode.ionian;
  modeSelectorObjects = ModeSelectorObjects;
  octave = Octave;
  showHowTo = true;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Fretonator - the ultimate free guitar theory tool');
    this.meta.updateTag({ name: 'description', content: 'The interactive theory tool for guitarists. Choose a starting note, pick a mode, check out the fretboard and have a jam!' })
  }

  resetNoteExtender() {
    this.noteExtender = '';
  }

  toggleHowTo() {
    this.showHowTo = !this.showHowTo;
  }
}
