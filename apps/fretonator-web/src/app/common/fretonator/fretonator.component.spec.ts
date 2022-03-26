import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorModule } from './fretonator.module';
import { Component, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FretonatorComponent', () => {
  const selectors = {
    toggleScaleInfo: By.css('.infoButton--scaleMapInfo'),
    scaleMapDegreesInfo: By.css('.infoBlock--scaleDegrees'),
  };

  @Component({
    selector: 'app-fretonator-spec',
    template: `
      <app-fretonator [modeMap]="[{
                                  name: 'f',
                                  sharp: false,
                                  flat: false,
                                  doubleFlat: false,
                                  doubleSharp: false,
                                  displayName: 'F'
                                }]"
                      [fretMap]="[
                      { string: 'A', fret: 0, displayName: 'A', degree: 'dominant' },
                      { string: 'A', fret: 2, displayName: 'B', degree: 'submediant' }]">
      </app-fretonator>
    `
  })
  class FretonatorSpecComponent {
  }

  let component: FretonatorSpecComponent;
  let fixture: ComponentFixture<FretonatorSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretonatorSpecComponent],
      imports: [FretonatorModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorSpecComponent);
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
      expect(toggleScaleButton.nativeElement.textContent.trim()).toBe('Hide scale degrees info');
    });
  });
});
