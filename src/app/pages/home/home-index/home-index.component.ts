import { Component, OnInit } from '@angular/core';
import { Mode, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects } from '../../../util/constants';
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

  constructor(private title: Title) {}

  // to do meta stuff

  ngOnInit(): void {
    this.title.setTitle('Welcome | Fretonator');
  }
}
