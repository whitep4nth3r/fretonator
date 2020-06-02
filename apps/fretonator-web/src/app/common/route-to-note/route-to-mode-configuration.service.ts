import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Mode, NoteExtenderString, NoteSymbol } from '../../util/types';

@Injectable({
  providedIn: 'root'
})
export class RouteToModeConfigurationService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    return {
      note: route.params.note || NoteSymbol.c,
      noteExtender: route.params.noteExtender || NoteExtenderString.natural,
      mode: route.params.mode || Mode.ionian
    }
  }
}
