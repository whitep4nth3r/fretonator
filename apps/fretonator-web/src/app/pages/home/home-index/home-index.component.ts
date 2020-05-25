import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';
import { AbstractDataService } from '../../../common/abstract-data/abstract-data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
  animations: [
    trigger('openClose', [
      state('*', style({ height: '*', overflow: 'visible' })),
      state('void', style({ height: '0', overflow: 'hidden' })),
      transition('* => void', [animate('0.2s')]),
      transition('void => *', [animate('0.2s')])
    ]),
    trigger('slideInOut', [
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      state('void', style({ opacity: 0, transform: 'translateX(-80px)' })),
      transition('* => void', [animate('0.1s')]),
      transition('void => *', [animate('0.1s')])
    ])
  ]
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
    switch (_showHowTo) {
      case false:
        this.showHowTo = false;
        break;
      case true:
        this.showHowTo = true;
        break;
      default:
        this.showHowTo = true;
    }

  }

  resetNoteExtender() {
    this.noteExtender = '';
  }

  toggleHowTo() {
    this.showHowTo = !this.showHowTo;
    this.localStorage.setItem('showHowTo', this.showHowTo);
  }
}
