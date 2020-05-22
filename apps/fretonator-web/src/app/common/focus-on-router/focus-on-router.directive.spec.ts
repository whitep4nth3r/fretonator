import { FocusOnRouterDirective } from './focus-on-router.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FocusOnRouterModule } from './focus-on-router.module';
import { NavigationEnd, Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FocusOnRouterDirective', () => {
  @Component({
    selector: 'app-focus-on-router-spec',
    template: `
      <button class="button" appFocusOnRouter>Hello</button>
      <router-outlet></router-outlet>
    `
  })
  class AppFocusOnRouterSpec {
  }

  @Component({
    selector: 'app-page-spec',
    template: ''
  })
  class AppPageSpec {
  }

  const routeHome: Route = { path: '', component: AppPageSpec };
  const routeAbout: Route = { path: 'about', component: AppPageSpec };

  let fixture: ComponentFixture<AppFocusOnRouterSpec>;
  let component: AppFocusOnRouterSpec;
  let router: Router;

  const selectors = {
    button: By.css('.button')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FocusOnRouterModule,
        RouterTestingModule.withRoutes([routeHome, routeAbout])
      ],
      declarations: [
        AppFocusOnRouterSpec,
        AppPageSpec
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFocusOnRouterSpec);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should not focus on first navigation', () => {
    const elem = fixture.debugElement.query(selectors.button);
    const spy = spyOn(elem.nativeElement, 'focus');

    fixture.ngZone.run(async () => {
      await router.navigate(['/']);
      await fixture.whenStable();
      expect(spy).not.toHaveBeenCalled();
    });

  });

  it('should focus only on second navigation', () => {
    const elem = fixture.debugElement.query(selectors.button);
    const spy = spyOn(elem.nativeElement, 'focus');

    fixture.ngZone.run(async () => {
      await router.navigate(['/']);
      await router.navigate(['/', 'about']);
      await fixture.whenStable();
      expect(spy).toHaveBeenCalledTimes(1);
    });

  });
});
