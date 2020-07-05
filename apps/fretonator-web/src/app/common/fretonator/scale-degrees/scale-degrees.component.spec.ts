import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleDegreesComponent } from './scale-degrees.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ScaleDegreesModule } from './scale-degrees.module';

describe('ScaleDegreesComponent', () => {
  const selectors = {
    tonicBlob: By.css('.tonic'),
    mediantBlob: By.css('.mediant'),
    dominantBlob: By.css('.dominant')
  };

  const classNames = {
    tonicSelected: 'degreesDisplay__degree--tonic',
    mediantSelected: 'degreesDisplay__degree--mediant',
    dominantSelected: 'degreesDisplay__degree--dominant'
  };

  @Component({
    selector: 'app-scale-degrees-spec',
    template: `
      <app-scale-degrees></app-scale-degrees>
    `
  })
  class ScaleDegreesComponentSpec {
  }

  let component: ScaleDegreesComponentSpec;
  let fixture: ComponentFixture<ScaleDegreesComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleDegreesComponentSpec],
      imports: [ScaleDegreesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleDegreesComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clickTonic()', () => {
    let tonicBlob: DebugElement;

    beforeEach(() => {
      tonicBlob = fixture.debugElement.query(selectors.tonicBlob);
      tonicBlob.nativeElement.click();
      fixture.detectChanges();
    });

    it('removes the active class to the tonic degree display on first click', () => {
      expect(tonicBlob.classes[classNames.tonicSelected]).toBeFalsy();
    });
  });

  xdescribe('clickMediant()', () => {
    let mediantBlob: DebugElement;

    beforeEach(() => {
      mediantBlob = fixture.debugElement.query(selectors.mediantBlob);
      mediantBlob.nativeElement.click();
      fixture.detectChanges();
    });

    it('adds the active class to the mediant degree display on first click', () => {
      expect(mediantBlob.classes[classNames.mediantSelected]).toBeTruthy();
    });
  });

  xdescribe('clickDominant()', () => {
    let dominantBlob: DebugElement;

    beforeEach(() => {
      dominantBlob = fixture.debugElement.query(selectors.dominantBlob);
      dominantBlob.nativeElement.click();
      fixture.detectChanges();
    });

    it('adds the active class to the dominant degree display on first click', () => {
      expect(dominantBlob.classes[classNames.dominantSelected]).toBeTruthy();
    });
  });
});
