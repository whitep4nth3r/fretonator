import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Mode, NoteExtenderSymbol, NoteSymbol } from '../../util/types';

@Injectable({
  providedIn: 'root'
})
export class IsValidModeConfigurationGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): boolean | UrlTree {
    const { note, noteExtender, mode } = next.params;
    const home = this.router.createUrlTree(['/']);

    if(!Mode[mode]) {
      return home;
    }

    const extenderSymbol = NoteExtenderSymbol[noteExtender];
    const validCombination = Object.values(NoteSymbol).find(value => value === `${note}${extenderSymbol}`)

    if(!validCombination) {
      return home;
    }

    return true;
  }
}
