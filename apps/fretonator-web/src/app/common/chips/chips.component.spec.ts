import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {ChipsModule} from './chips.module';
import {ChipsComponent} from './chips.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ChipsComponent', () => {

  @Component({
    selector: 'app-chips-spec',
    template: `
      <app-chips name="chips-test">
        <app-chip id="one" value="one" [disabled]="firstDisabled" [rounded]="firstRounded">One</app-chip>
        <app-chip id="two" value="two" [disabled]="secondDisabled" [rounded]="secondRounded">Two</app-chip>
        <app-chip id="three" value="three" [disabled]="thirdDisabled" [rounded]="thirdRounded">Two</app-chip>
      </app-chips>
    `,
  })
  class ChipsComponentSpec {
    firstDisabled = false;
    secondDisabled = false;
    thirdDisabled = false;
    firstRounded = false;
    secondRounded = false;
    thirdRounded = false;
  }

  let component: ChipsComponentSpec;
  let fixture: ComponentFixture<ChipsComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChipsComponentSpec,
      ],
      imports: [
        ChipsModule,
        FormsModule,
      ],
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
});
