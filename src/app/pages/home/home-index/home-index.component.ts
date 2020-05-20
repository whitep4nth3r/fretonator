import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  mode: Mode = Mode.ionian;
  youTubeId: string = '2YBtspm8j8M';

  constructor(private title: Title) {}

  // to do meta stuff

  ngOnInit(): void {
    this.title.setTitle('Welcome | Fretonator');
  }
}
