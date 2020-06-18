import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorComponent } from './fretonator.component';
import { FretonatorModule } from './fretonator.module';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FretonatorComponent', () => {

  const selectors = {
    twelveButton: By.css('.fretboard__toggleButton--twelve'),
    twentyFourButton: By.css('.fretboard__toggleButton--twentyFour')
  };

  const classNames = {
    toggleFretButtonSelected: 'fretboard__toggleButton--active'
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
  class FretonatorComponentSpec {
  }

  let component: FretonatorComponentSpec;
  let fixture: ComponentFixture<FretonatorComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretonatorComponentSpec],
      imports: [FretonatorModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setFretMode()', () => {
    let twelveButton: DebugElement;
    let twentyFourButton: DebugElement;

    beforeEach(() => {
      twelveButton = fixture.debugElement.query(selectors.twelveButton);
      twentyFourButton = fixture.debugElement.query(selectors.twentyFourButton);
    });

    it('changes the fret mode to twenty four when the button is clicked', () => {
      twentyFourButton.nativeElement.click();
      fixture.detectChanges();
      expect(twentyFourButton.classes[classNames.toggleFretButtonSelected]).toBeTruthy();
    });

    it('changes the fret mode to twelve when the button is clicked', () => {
      twelveButton.nativeElement.click();
      fixture.detectChanges();
      expect(twelveButton.classes[classNames.toggleFretButtonSelected]).toBeTruthy();
    });
  });
});
