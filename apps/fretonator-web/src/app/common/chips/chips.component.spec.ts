import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChipsModule } from './chips.module';
import { SelectedColor } from './chip/chip.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import {Mode} from '../../util/types';

describe('ChipsComponent', () => {
  @Component({
    selector: 'app-chips-spec',
    template: `
      <app-chips>
        <app-chip
          [note]="'a'"
          [noteExtender]="'natural'"
          [mode]="Mode.ionian"
          [selectedColor]="selectedColor">One
        </app-chip>
        <app-chip
          [note]="'b'"
          [noteExtender]="'flat'"
          [mode]="Mode.mixolydian"
          [rounded]="true">Two
        </app-chip>
        <app-chip
          [note]="'f'"
          [noteExtender]="'sharp'"
          [mode]="Mode.minorPentatonic"
        >Two
        </app-chip>
      </app-chips>
    `
  })
  class ChipsSpecComponent {
    Mode = Mode;
    selectedColor: SelectedColor = SelectedColor.default;
  }

  let component: ChipsSpecComponent;
  let fixture: ComponentFixture<ChipsSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChipsSpecComponent
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
    fixture = TestBed.createComponent(ChipsSpecComponent);
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
