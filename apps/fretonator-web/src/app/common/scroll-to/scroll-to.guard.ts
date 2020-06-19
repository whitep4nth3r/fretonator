import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalService } from '../../global.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollToGuard implements CanActivate {
  constructor(private router: Router,
              private globalService: GlobalService) {

  }

  canActivate(): true {
    const scrollToTarget = this.globalService.getGlobalScrollTarget();
    const { extras } = this.router.getCurrentNavigation();
    const { state } = extras;

    if (state && state.scrollToTop && scrollToTarget) {
      scrollToTarget.scrollIntoView();
    }

    return true;
  }

}
