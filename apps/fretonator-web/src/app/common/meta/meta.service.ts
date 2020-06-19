import { Injectable } from '@angular/core';
import { FretMapService } from '../fret-map/fret-map.service';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private fretMapService: FretMapService,
              private title: Title,
              private meta: Meta) {
  }

  getBaseTitle = (): string => {
    return 'Fretonator - the ultimate interactive free guitar theory tool';
  };

  getGenericEndDescription = (): string => {
    return 'Choose a starting note, pick a mode, check out the fretboard and have a jam!';
  };

  generateHomePageUrl = (note,
                         noteExtenderString,
                         mode): string => {
    return 'https://www.fretonator.com/' + note + '/' + noteExtenderString + '/' + mode;
  };

  generateHomePageTitle = (note,
                           noteExtenderString,
                           mode): string => {
    return this.getBaseTitle() + ' | ' +
      this.fretMapService.convertFretMapConfigurationToDisplayString(
        note,
        noteExtenderString,
        mode
      );
  };

  generateHomePageMetaDescription = (note,
                                     noteExtenderString,
                                     mode): string => {
    return 'Learn the ' + this.fretMapService.convertFretMapConfigurationToDisplayString(
      note,
      noteExtenderString,
      mode
    ) + ' mode on the guitar and play along to a jam track with the Fretonator. ' + this.getGenericEndDescription();
  };

  updateAllGenericMeta = (pageUrl: string, pageTitle: string, pageDescription: string) => {
    this.title.setTitle(pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: pageDescription
    });

    this.meta.updateTag({
      property: 'og:url',
      content: pageUrl
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: pageDescription
    });

    this.meta.updateTag({
      property: 'og:description',
      content: pageDescription
    });

    this.meta.updateTag({
      property: 'og:title',
      content: pageTitle
    });
  };
}
