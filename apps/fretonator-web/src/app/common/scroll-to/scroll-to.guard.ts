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
    const navigation = this.router.getCurrentNavigation();

    if(navigation?.extras) {
      const { state } = navigation.extras;
      if (state && state['scrollToTop'] && scrollToTarget) {
        scrollToTarget.scrollIntoView();
      }
    }

    return true;
  }

}
