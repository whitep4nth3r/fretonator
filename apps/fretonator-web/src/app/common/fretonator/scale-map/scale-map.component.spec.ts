import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleMapComponent } from './scale-map.component';
import { Component, DebugElement } from '@angular/core';
import { ScaleMapModule } from './scale-map.module';
import { By } from '@angular/platform-browser';

describe('ScaleMapComponent', () => {

  const selectors = {
    toggleScaleInfo: By.css('.button__infoToggle--scaleDegrees'),
    scaleMapDegreesInfo: By.css('.infoBlock--scaleDegrees')
  };

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

  describe('toggleScaleMapInfo()', () => {
    let toggleScaleButton: DebugElement;

    beforeEach(() => {
      toggleScaleButton = fixture.debugElement.query(selectors.toggleScaleInfo);
      toggleScaleButton.nativeElement.click();
      fixture.detectChanges();
    });

    it('should show the scale map info', () => {
      expect(fixture.debugElement.query(selectors.scaleMapDegreesInfo)).toBeTruthy();
    });

    it('should update the text on the toggle button', () => {
      expect(toggleScaleButton.nativeElement.textContent.trim()).toBe('Hide info');
    });
  });
});

