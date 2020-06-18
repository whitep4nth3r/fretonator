import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private scrollTarget: HTMLElement;

  getScrollTarget(): HTMLElement {
    return this.scrollTarget;
  }

  setScrollTarget(el: HTMLElement) {
    this.scrollTarget = el;
  }
}
