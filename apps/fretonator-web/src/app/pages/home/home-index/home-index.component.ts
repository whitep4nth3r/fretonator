import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Mode, NoteExtenderString, NoteExtenderSymbol, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';
import { AbstractDataService } from '../../../common/abstract-data/abstract-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { MetaService } from '../../../common/meta/meta.service';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})

export class HomeIndexComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef<HTMLElement>;
  note: NoteSymbol = NoteSymbol.c;
  noteExtender!: NoteExtenderSymbol;
  noteExtenderString!: NoteExtenderString;
  mode: Mode = Mode.ionian;
  modeSelectorObjects = ModeSelectorObjects;
  octave = Octave;

  constructor(
    private title: Title,
    private meta: Meta,
    private localStorage: AbstractDataService,
    private activatedRoute: ActivatedRoute,
    private fretMapService: FretMapService,
    private metaService: MetaService,
    private globalService: GlobalService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => this.onRouteChange());
    this.setHomePageMeta();
  }

  ngAfterViewInit(): void {
    this.globalService.setScrollTarget(this.scrollTarget.nativeElement);
  }

  onRouteChange() {
    const routeData = this.activatedRoute.snapshot.data['selected'];
    this.note = routeData.note;
    this.noteExtenderString = routeData.noteExtender;
    this.mode = routeData.mode;

    switch (routeData.noteExtender) {
      case 'sharp':
        this.noteExtender = NoteExtenderSymbol.sharp;
        break;
      case 'flat':
        this.noteExtender = NoteExtenderSymbol.flat;
        break;
      case 'natural':
      default:
        this.noteExtender = NoteExtenderSymbol.natural;
    }

    this.setHomePageMeta();
  }

  setHomePageMeta() {
    const pageDescription = this.metaService.generateHomePageMetaDescription(this.note, this.noteExtenderString, this.mode);
    const pageTitle = this.metaService.generateHomePageTitle(this.note, this.noteExtenderString, this.mode);
    const pageUrl = this.metaService.generateHomePageUrl(this.note, this.noteExtenderString, this.mode);

    this.metaService.updateAllGenericMeta(pageUrl, pageTitle, pageDescription);
  }

  noteHasFlatExtender(note: string) {
    return !(note === NoteSymbol.f || note === NoteSymbol.c);
  }

  noteHasSharpExtender(note: string) {
    return !(note === NoteSymbol.b || note === NoteSymbol.e || note == NoteSymbol.a);
  }

  randomize() {
    const note = this.getRandomNote();
    const mode = this.getRandomMode();
    const extender = this.getRandomNoteExtenderString(note);

    this.router.navigate([note, extender, mode]);
  }

  getRandomNote() {
    const randomIndex = Math.floor(Math.random() * Octave.length);
    return Octave[randomIndex];
  }

  getRandomMode() {
    const modeCount = Object.keys(Mode).length;
    const randomIndex = Math.floor(Math.random() * modeCount);

    return Object.values(Mode)[randomIndex];
  }

  getRandomNoteExtenderString(note: string) {
    const noteExtenderStrings = [NoteExtenderString.natural];
    if (this.noteHasFlatExtender(note)) {
      noteExtenderStrings.push(NoteExtenderString.flat);
    }
    if (this.noteHasSharpExtender(note)) {
      noteExtenderStrings.push(NoteExtenderString.sharp);
    }

    const randomIndex = Math.floor(Math.random() * noteExtenderStrings.length);
    return noteExtenderStrings[randomIndex];
  }
}
