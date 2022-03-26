import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIndexComponent } from './about-index.component';
import { Component } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { AboutModule } from '../about.module';

describe('AboutIndexComponent', () => {
  @Component({
    selector: 'app-about-index-spec',
    template: `
      <app-about-index></app-about-index>
    `
  })
  class AboutIndexSpecComponent {
  }

  let component: AboutIndexSpecComponent;
  let fixture: ComponentFixture<AboutIndexSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutIndexSpecComponent],
      imports: [
        AboutModule,
        BrowserTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
