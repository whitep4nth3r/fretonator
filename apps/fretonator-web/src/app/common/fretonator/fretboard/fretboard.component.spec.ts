import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardComponent } from './fretboard.component';
import { Component, DebugElement } from '@angular/core';
import { FretboardModule } from './fretboard.module';
import { By } from '@angular/platform-browser';

describe('FretboardComponent', () => {
  const selectors = {
    twelveButton: By.css('.fretboard__toggleButton--left'),
    twentyFourButton: By.css('.fretboard__toggleButton--middle-left'),
    rightButton: By.css('.fretboard__toggleButton--right'),
    leftButton: By.css('.fretboard__toggleButton--middle-right')
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

  describe('setOrientation()', () => {
    let leftButton: DebugElement;
    let rightButton: DebugElement;

    beforeEach(() => {
      leftButton = fixture.debugElement.query(selectors.leftButton);
      rightButton = fixture.debugElement.query(selectors.rightButton);
    });

    it('changes the fret mode to left orientation when the button is clicked', () => {
      leftButton.nativeElement.click();
      fixture.detectChanges();
      expect(leftButton.classes[classNames.toggleFretButtonSelected]).toBeTruthy();
    });

    it('changes the fret mode to right orientation when the button is clicked', () => {
      rightButton.nativeElement.click();
      fixture.detectChanges();
      expect(rightButton.classes[classNames.toggleFretButtonSelected]).toBeTruthy();
    });
  })
});
