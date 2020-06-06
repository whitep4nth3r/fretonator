import { Component, OnInit } from '@angular/core';
import { Mode, NoteExtenderString, NoteExtenderSymbol, NoteSymbol } from '../../../util/types';
import { ModeSelectorObjects, Octave } from '../../../util/constants';
import { Meta, Title } from '@angular/platform-browser';
import { AbstractDataService } from '../../../common/abstract-data/abstract-data.service';
import { ActivatedRoute } from '@angular/router';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { MetaService } from '../../../common/meta/meta.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})

export class HomeIndexComponent implements OnInit {
  note: NoteSymbol = NoteSymbol.c;
  noteExtender: NoteExtenderSymbol;
  noteExtenderString: NoteExtenderString;
  mode: Mode = Mode.ionian;
  modeSelectorObjects = ModeSelectorObjects;
  octave = Octave;
  showHowTo;

  constructor(
    private title: Title,
    private meta: Meta,
    private localStorage: AbstractDataService,
    private activatedRoute: ActivatedRoute,
    private fretMapService: FretMapService,
    private metaService: MetaService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => this.onRouteChange());
    this.setHomePageTitle();
    this.setHomePageMeta();

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

    this.setHomePageTitle();
    this.setHomePageMeta();
  }

  toggleHowTo() {
    this.showHowTo = !this.showHowTo;
    this.localStorage.setItem('showHowTo', this.showHowTo);
  }

  setHomePageTitle() {
    this.title.setTitle(
      this.metaService.generateHomePageTitle(this.note, this.noteExtenderString, this.mode)
    );
  }

  setHomePageMeta() {
    this.meta.updateTag({
      name: 'description',
      content: this.metaService.generateHomePageMetaDescription(this.note, this.noteExtenderString, this.mode)
    });
    
    this.meta.updateTag({
      name: 'twitter:description',
      content: this.metaService.generateHomePageMetaDescription(this.note, this.noteExtenderString, this.mode)
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.metaService.generateHomePageMetaDescription(this.note, this.noteExtenderString, this.mode)
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.metaService.generateHomePageTitle(this.note, this.noteExtenderString, this.mode)
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.metaService.generateHomePageUrl(this.note, this.noteExtenderString, this.mode)
    });
  }
}
