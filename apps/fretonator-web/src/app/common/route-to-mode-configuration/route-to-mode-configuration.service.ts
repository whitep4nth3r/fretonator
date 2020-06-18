import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Mode, NoteExtenderString, NoteSymbol } from '../../util/types';

interface ModeRouteData {
  note: NoteSymbol,
  noteExtender: NoteExtenderString,
  mode: Mode
}

@Injectable({
  providedIn: 'root'
})
export class RouteToModeConfigurationService implements Resolve<ModeRouteData> {

  resolve(route: ActivatedRouteSnapshot): ModeRouteData {
    return {
      note: route.params.note || NoteSymbol.c,
      noteExtender: route.params.noteExtender || NoteExtenderString.natural,
      mode: route.params.mode || Mode.ionian
    };
  }
}
