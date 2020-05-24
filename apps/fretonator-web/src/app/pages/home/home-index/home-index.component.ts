import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';
import { AbstractDataService } from '../../../common/abstract-data/abstract-data.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  noteExtender: '#' | '_' | '' = '';
  mode: Mode = Mode.ionian;
  modeSelectorObjects = ModeSelectorObjects;
  octave = Octave;
  showHowTo;

  constructor(private title: Title, private meta: Meta, private localStorage: AbstractDataService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fretonator - the ultimate free guitar theory tool');
    this.meta.updateTag({
      name: 'description',
      content: 'The interactive theory tool for guitarists. Choose a starting note, pick a mode, check out the fretboard and have a jam!'
    });

    const _showHowTo = this.localStorage.getItem('showHowTo');
    console.log(_showHowTo);
    this.showHowTo = _showHowTo === undefined || _showHowTo === null ? true : _showHowTo;
    console.log(this.showHowTo)
  }

  resetNoteExtender() {
    this.noteExtender = '';
  }

  toggleHowTo() {
    console.log('toggle')
    this.showHowTo = !this.showHowTo;
    this.localStorage.setItem('showHowTo', this.showHowTo);
    console.log('final value', this.showHowTo)
  }
}
