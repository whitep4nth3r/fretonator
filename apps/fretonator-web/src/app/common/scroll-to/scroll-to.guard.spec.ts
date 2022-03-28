import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ScrollToGuard} from './scroll-to.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {Component, NgZone} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Router} from '@angular/router';

describe('ScrollToGuard', () => {
  @Component({
    selector: 'app-dummy-component',
    template: ``,
  })
  class DummyComponent {
  }

  @Component({
    selector: 'app-router-component',
    template: `
      <router-outlet></router-outlet>`,
  })
  class AppComponent {
  }

  let guard: ScrollToGuard;
  let globalService: GlobalService;
  let router: Router;
  let zone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: '', component: DummyComponent},
            {path: 'test', component: DummyComponent, canActivate: [ScrollToGuard]},
          ],
        ),
      ],
    });
    guard = TestBed.inject(ScrollToGuard);
    globalService = TestBed.inject(GlobalService);
    router = TestBed.inject(Router);
    zone = TestBed.inject(NgZone);
    zone.run(() => router.initialNavigation());
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  const doNavigation = (state = {}) => {
    router.navigate(['test'], {state});
    tick();
  };

  describe('With globalScrollTarget', () => {
    let elemMock: HTMLElement;

    beforeEach(() => {
      elemMock = {
        scrollIntoView: jest.fn(),
      } as never;

      globalService.setGlobalScrollTarget(elemMock);
    });

    it('should run the scrollIntoView function on the globalScrollTarget if scrollToTop is passed in as true', fakeAsync(() => {
      zone.run(() => {
        doNavigation({scrollToTop: true});
        expect(elemMock.scrollIntoView).toHaveBeenCalled();
      });
    }));

    it('should not run the scrollIntoView function on the globalScrollTarget if scrollToTop is not specified', fakeAsync(() => {
      zone.run(() => {
        doNavigation({});
        expect(elemMock.scrollIntoView).not.toHaveBeenCalled();
      });
    }));
  });

  describe('Without globalScrollTarget', () => {
    it('should complete the navigation successfully with scrollToTop', fakeAsync(() => {
      zone.run(() => {
        expect(() => doNavigation({scrollToTop: true})).not.toThrow();
      });
    }));

    it('should complete the navigation successfully without scrollToTop', fakeAsync(() => {
      zone.run(() => {
        expect(() => doNavigation({})).not.toThrow();
      });
    }));
  });
});

