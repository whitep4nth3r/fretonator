import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

    if(!NoteSymbol[note + NoteExtenderSymbol[noteExtender]]) {
      return home;
    }

    return true;
  }
}
