import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordMapComponent } from './chord-map.component';
import { Component } from '@angular/core';
import { ChordMapModule } from './chord-map.module';

describe('ChordMapComponent', () => {

  @Component({
    selector: 'app-chord-map-spec',
    template: `
      <app-chord-map></app-chord-map>
    `
  })
  class ChordMapComponentSpec {
  }

  let component: ChordMapComponentSpec;
  let fixture: ComponentFixture<ChordMapComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChordMapComponentSpec],
      imports: [ChordMapModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordMapComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
