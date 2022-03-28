import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { ScaleMapModule } from './scale-map.module';

describe('ScaleMapComponent', () => {
  @Component({
    selector: 'app-scale-map-spec',
    template: `
      <app-scale-map></app-scale-map>
    `
  })
  class ScaleMapSpecComponent {
  }

  let component: ScaleMapSpecComponent;
  let fixture: ComponentFixture<ScaleMapSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleMapSpecComponent],
      imports: [ScaleMapModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleMapSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

