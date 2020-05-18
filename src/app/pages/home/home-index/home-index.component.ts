import { Component, OnInit } from '@angular/core';
import { NoteSymbol, Mode } from '../../../util/types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  mode: Mode = Mode.ionian;

  constructor(private title: Title) {}

  //to do meta stuff

  ngOnInit(): void {
    this.title.setTitle('Welcome | Fretonator');
  }
}
