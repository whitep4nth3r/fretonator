import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsIndexComponent } from './patterns-index.component';
import { Component, DebugElement } from '@angular/core';
import { LearnModule } from '../learn.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('PatternsIndexComponent', () => {
  const selectors = {
    chip: By.css('.chip')
  };
  const classNames = {
    activeChip: 'chip--active'
  };

  @Component({
    selector: 'app-patterns-index-spec',
    template: `
      <app-patterns-index></app-patterns-index>
    `
  })
  class PatternsIndexComponentSpec {
  }

  let component: PatternsIndexComponentSpec;
  let fixture: ComponentFixture<PatternsIndexComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatternsIndexComponentSpec],
      imports: [
        LearnModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsIndexComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
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
