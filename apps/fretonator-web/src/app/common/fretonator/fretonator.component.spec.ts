import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorComponent } from './fretonator.component';
import { FretonatorModule } from './fretonator.module';
import { Component } from '@angular/core';
import { dIonianFretMappings } from '../generate-fret-map/generate-fret-map.service.testConstants';

describe('FretonatorComponent', () => {

  @Component({
    selector: 'app-fretonator-spec',
    template: `
      <app-fretonator></app-fretonator>
    `,
  })
  class FretonatorComponentSpec {
  }

  let component: FretonatorComponent;
  let fixture: ComponentFixture<FretonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretonatorComponentSpec],
      imports: [FretonatorModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorComponent);
    component = fixture.componentInstance;
    component.fretMap = dIonianFretMappings;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
