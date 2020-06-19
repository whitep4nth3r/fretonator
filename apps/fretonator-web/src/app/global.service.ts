import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private scrollTarget: HTMLElement;
  private globalScrollTarget: HTMLElement;

  getScrollTarget(): HTMLElement {
    return this.scrollTarget;
  }

  setScrollTarget(el: HTMLElement) {
    this.scrollTarget = el;
  }

  getGlobalScrollTarget() : HTMLElement {
    return this.globalScrollTarget;
  }

  setGlobalScrollTarget(el: HTMLElement) {
    this.globalScrollTarget = el;
  }
}
