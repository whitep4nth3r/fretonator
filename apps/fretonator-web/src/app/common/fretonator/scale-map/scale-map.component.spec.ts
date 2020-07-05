import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleMapComponent } from './scale-map.component';
import { Component } from '@angular/core';
import { ScaleMapModule } from './scale-map.module';

describe('ScaleMapComponent', () => {
  @Component({
    selector: 'app-scale-map-spec',
    template: `
      <app-scale-map></app-scale-map>
    `
  })
  class ScaleMapComponentSpec {
  }

  let component: ScaleMapComponentSpec;
  let fixture: ComponentFixture<ScaleMapComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleMapComponentSpec],
      imports: [ScaleMapModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleMapComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

