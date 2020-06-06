import { Injectable } from '@angular/core';
import { FretMapService } from '../fret-map/fret-map.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private fretMapService: FretMapService) {
  }

  getBaseTitle = (): string => {
    return 'Fretonator - the ultimate interactive free guitar theory tool';
  };

  getGenericEndDescription = (): string => {
    return 'Choose a starting note, pick a mode, check out the fretboard and have a jam!';
  }

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
}
