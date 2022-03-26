import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { ChordMapModule } from './chord-map.module';

describe('ChordMapComponent', () => {

  @Component({
    selector: 'app-chord-map-spec',
    template: `
      <app-chord-map></app-chord-map>
    `
  })
  class ChordMapSpecComponent {
  }

  let component: ChordMapSpecComponent;
  let fixture: ComponentFixture<ChordMapSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChordMapSpecComponent],
      imports: [ChordMapModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordMapSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
