import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalMapComponent } from './interval-map.component';
import { Component } from '@angular/core';
import { IntervalMapModule } from './interval-map.module';

describe('IntervalMapComponent', () => {

  @Component({
    selector: 'app-interval-map-spec',
    template: `
      <app-interval-map></app-interval-map>
    `,
  })
  class IntervalMapComponentSpec {
  }

  let component: IntervalMapComponentSpec;
  let fixture: ComponentFixture<IntervalMapComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalMapComponentSpec ],
      imports: [ IntervalMapModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalMapComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
