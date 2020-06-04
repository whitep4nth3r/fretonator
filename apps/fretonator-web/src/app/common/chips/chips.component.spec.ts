import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChipsModule } from './chips.module';
import { ChipsComponent } from './chips.component';
import { SelectedColor } from './chip/chip.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('ChipsComponent', () => {
  @Component({
    selector: 'app-chips-spec',
    template: `
      <app-chips>
        <app-chip
          [note]="'a'"
          [noteExtender]="'natural'"
          [mode]="'ionian'"
          [selectedColor]="selectedColor">One
        </app-chip>
        <app-chip
          [note]="'b'"
          [noteExtender]="'flat'"
          [mode]="'mixolydian'"
          [rounded]="true">Two
        </app-chip>
        <app-chip
          [note]="'f'"
          [noteExtender]="'sharp'"
          [mode]="'minorPentatonic'"
        >Two
        </app-chip>
      </app-chips>
    `
  })
  class ChipsComponentSpec {
    selectedColor: SelectedColor = SelectedColor.default;
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
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                selected: { note: 'c', noteExtender: 'natural', mode: 'ionian' }
              }
            }
          }
        }
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
});
