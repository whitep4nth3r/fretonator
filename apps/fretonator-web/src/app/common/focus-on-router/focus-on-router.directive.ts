import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, skip } from 'rxjs/operators';

@Directive({
  selector: '[appFocusOnRouter]'
})
export class FocusOnRouterDirective implements OnDestroy {
  routerSubscription: Subscription = this.router.events
    .pipe(filter(($event) => $event instanceof NavigationEnd))
    .pipe(skip(1))
    .subscribe(($event) => this.focusOnEl());

  constructor(private router: Router, private elRef: ElementRef) {
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  focusOnEl() {
    this.elRef.nativeElement.focus();
  }
}
