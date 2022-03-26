import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { FooterModule } from './footer.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  @Component({
    selector: 'app-footer-spec',
    template: `
      <app-footer></app-footer>
    `
  })
  class FooterSpecComponent {
  }

  let component: FooterSpecComponent;
  let fixture: ComponentFixture<FooterSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSpecComponent],
      imports: [FooterModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
