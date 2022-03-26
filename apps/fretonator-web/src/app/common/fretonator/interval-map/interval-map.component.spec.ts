import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { IntervalMapModule } from './interval-map.module';

describe('IntervalMapComponent', () => {

  @Component({
    selector: 'app-interval-map-spec',
    template: `
      <app-interval-map></app-interval-map>
    `
  })
  class IntervalMapSpecComponent {
  }

  let component: IntervalMapSpecComponent;
  let fixture: ComponentFixture<IntervalMapSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalMapSpecComponent],
      imports: [IntervalMapModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalMapSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
