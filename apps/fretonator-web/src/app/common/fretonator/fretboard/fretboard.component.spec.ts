import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardComponent } from './fretboard.component';
import { Component, DebugElement } from '@angular/core';
import { FretboardModule } from './fretboard.module';
import { By } from '@angular/platform-browser';

describe('FretboardComponent', () => {
  const selectors = {
    twelveButton: By.css('.fretboard__toggleButton--twelve'),
    twentyFourButton: By.css('.fretboard__toggleButton--twentyFour')
  };

  const classNames = {
    toggleFretButtonSelected: 'fretboard__toggleButton--active'
  };

  @Component({
    selector: 'app-fretboard-spec',
    template: `
      <app-fretboard [fretMap]="[
                      { string: 'A', fret: 0, displayName: 'A', degree: 'dominant' },
                      { string: 'A', fret: 2, displayName: 'B', degree: 'submediant' }]">
      </app-fretboard>
    `
  })
  class FretboardComponentSpec {
  }

  let component: FretboardComponentSpec;
  let fixture: ComponentFixture<FretboardComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretboardComponentSpec],
      imports: [FretboardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretboardComponentSpec);
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
