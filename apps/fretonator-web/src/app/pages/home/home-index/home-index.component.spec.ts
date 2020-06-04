import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIndexComponent } from './home-index.component';
import { Component } from '@angular/core';
import { HomeModule } from '../home.module';
import { By } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeIndexComponent', () => {
  const selectors = {
    howToToggle: By.css('.hero__toggleHowTo'),
    howToList: By.css('.hero__list')
  };

  const classNames = {
    hideHowTo: 'hidden'
  };

  @Component({
    selector: 'app-home-index-spec',
    template: `
      <app-home-index></app-home-index>
    `
  })
  class HomeIndexComponentSpec {
  }

  let component: HomeIndexComponentSpec;
  let fixture: ComponentFixture<HomeIndexComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIndexComponentSpec],
      imports: [
        HomeModule,
        BrowserTestingModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              data: {
                selected: { note: 'c', noteExtender: 'natural', mode: 'ionian' }
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should toggle the how-to section', () => {
    const howToToggle = fixture.debugElement.query(selectors.howToToggle);
    const howToList = fixture.debugElement.query(selectors.howToList);
    howToToggle.nativeElement.click();
    fixture.detectChanges();
    expect(howToList.classes[classNames.hideHowTo]).toBeTruthy();
  });
});
