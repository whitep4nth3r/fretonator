import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Mode, NoteExtenderString, NoteExtenderSymbol, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';
import { AbstractDataService } from '../../../common/abstract-data/abstract-data.service';
import { ActivatedRoute } from '@angular/router';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { MetaService } from '../../../common/meta/meta.service';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})

export class HomeIndexComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTarget') scrollTarget: ElementRef<HTMLElement>;
  note: NoteSymbol = NoteSymbol.c;
  noteExtender: NoteExtenderSymbol;
  noteExtenderString: NoteExtenderString;
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
    private globalService: GlobalService
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
    const routeData = this.activatedRoute.snapshot.data.selected;
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
}
