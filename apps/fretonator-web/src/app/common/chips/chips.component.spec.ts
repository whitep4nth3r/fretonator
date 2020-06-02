import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ChipsModule } from './chips.module';
import { ChipsComponent } from './chips.component';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SelectedColor } from './chip/chip.component';

describe('ChipsComponent', () => {

  const classNames = {
    radio: 'input',
    chip: 'chip',
    chipRound: 'chip--round',
    chipGrey: 'chip--grey'
  };

  const selectors = {
    chip: By.css(`.${classNames.chip}`),
    radio: By.css(`.${classNames.radio}`)
  };

  @Component({
    selector: 'app-chips-spec',
    template: `
        <form [formGroup]="testForm">
            <app-chips name="chips-test" [rounded]="rounded" formControlName="chip">
                <app-chip id="one" link="one" [selectedColor]="selectedColor">One</app-chip>
                <app-chip id="two" link="two" [disabled]="disableSecond">Two</app-chip>
                <app-chip id="three" link="three">Two</app-chip>
            </app-chips>
        </form>
    `
  })
  class ChipsComponentSpec {
    rounded = false;
    disableSecond = false;
    selectedColor: SelectedColor = SelectedColor.default;

    get chip(): AbstractControl {
      return this.testForm.get('chip');
    }

    testForm = new FormGroup({
      chip: new FormControl()
    });
  }

  let component: ChipsComponentSpec;
  let fixture: ComponentFixture<ChipsComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChipsComponentSpec
      ],
      imports: [
        ChipsModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should apply rounded', () => {
    component.selectedColor = SelectedColor.grey;
    fixture.detectChanges();
    const chip = fixture.debugElement.query(selectors.chip);
    expect(chip.classes[classNames.chipGrey]).toBeTruthy();
  });

  it('should apply rounded', () => {
    component.rounded = true;
    fixture.detectChanges();
    const chip = fixture.debugElement.query(selectors.chip);
    expect(chip.classes[classNames.chipRound]).toBeTruthy();
  });

  describe('initial state', () => {

    it('should be pristine', () => {
      expect(component.chip.pristine).toBeTruthy();
    });

    it('should not be touched', () => {
      expect(component.chip.touched).toBeFalsy();
    });

    it('should not be dirty', () => {
      expect(component.chip.dirty).toBeFalsy();
    });


    it('not should update the reactive form without change', () => {
      expect(component.chip.value).toBeNull();
    });


  });

  describe('onChange', () => {

    let chips: DebugElement[];

    beforeEach(() => {
      chips = fixture.debugElement.queryAll(selectors.chip);
      chips[0].nativeElement.click();
    });

    it('should not be pristine', () => {
      expect(component.chip.pristine).toBeFalsy();
    });

    it('should be touched', () => {
      expect(component.chip.touched).toBeTruthy();
    });

    it('should be dirty', () => {
      expect(component.chip.dirty).toBeTruthy();
    });

    it('should update the reactive form', () => {
      expect(component.chip.value).toBe('one');
    });

  });

  describe('onBlur', () => {

    beforeEach(() => {
      const radio = fixture.debugElement.query(selectors.radio);
      radio.triggerEventHandler('blur', new Event('blur'));

    });

    it('should be pristine', () => {
      expect(component.chip.pristine).toBeTruthy();
    });

    it('should be touched', () => {
      expect(component.chip.touched).toBeTruthy();
    });

    it('should not be dirty', () => {
      expect(component.chip.dirty).toBeFalsy();
    });

  });

  describe('on Reactive form update', () => {

    let radios: DebugElement[];

    beforeEach(() => {
      radios = fixture.debugElement.queryAll(selectors.radio);
    });

    it('should select only the first item', () => {
      component.chip.setValue('one');
      fixture.detectChanges();
      expect(radios[0].properties.checked).toBeTruthy();
      expect(radios[1].properties.checked).toBeFalsy();
      expect(radios[2].properties.checked).toBeFalsy();
    });

    it('should select only the second item', () => {
      component.chip.setValue('two');
      fixture.detectChanges();
      expect(radios[0].properties.checked).toBeFalsy();
      expect(radios[1].properties.checked).toBeTruthy();
      expect(radios[2].properties.checked).toBeFalsy();
    });

    it('should select only the third item', () => {
      component.chip.setValue('three');
      fixture.detectChanges();
      expect(radios[0].properties.checked).toBeFalsy();
      expect(radios[1].properties.checked).toBeFalsy();
      expect(radios[2].properties.checked).toBeTruthy();
    });

    it('should make all chips disabled', () => {
      component.chip.disable();
      fixture.detectChanges();
      expect(radios[0].attributes['ng-reflect-is-disabled']).toBeTruthy();
    });

  });

  describe('Disabled', () => {

    let radios: DebugElement[];

    beforeEach(() => {
      radios = fixture.debugElement.queryAll(selectors.radio);
    });

    it('all chips should be disabled', () => {
      component.chip.disable();
      fixture.detectChanges();
      expect(radios[0].attributes['ng-reflect-is-disabled']).toBeTruthy();
      expect(radios[1].attributes['ng-reflect-is-disabled']).toBeTruthy();
      expect(radios[2].attributes['ng-reflect-is-disabled']).toBeTruthy();
    });

    it('only a single chip should be disabled', () => {
      component.disableSecond = true;
      fixture.detectChanges();
      expect(radios[0].attributes['ng-reflect-is-disabled']).toBeFalsy();
      expect(radios[1].attributes['ng-reflect-is-disabled']).toBeTruthy();
      expect(radios[2].attributes['ng-reflect-is-disabled']).toBeFalsy();
    });

  });

});
