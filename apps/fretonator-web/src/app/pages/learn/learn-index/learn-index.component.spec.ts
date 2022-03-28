import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, DebugElement } from '@angular/core';
import { LearnModule } from '../learn.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearnIndexComponent', () => {
  const selectors = {
    chip: By.css('.chip'),
  };
  const classNames = {
    activeChip: 'chip--active',
  };

  @Component({
    selector: 'app-learn-index-spec',
    template: ` <app-learn-index></app-learn-index> `,
  })
  class PatternsIndexSpecComponent {}

  let component: PatternsIndexSpecComponent;
  let fixture: ComponentFixture<PatternsIndexSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatternsIndexSpecComponent],
      imports: [LearnModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsIndexSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setPattern,', () => {
    let chip: DebugElement;

    beforeEach(() => {
      chip = fixture.debugElement.queryAll(selectors.chip)[1];
      chip.nativeElement.click();
      fixture.detectChanges();
    });

    it('should activate the clicked chip', () => {
      expect(chip.classes[classNames.activeChip]).toBeTruthy();
    });
  });
});
