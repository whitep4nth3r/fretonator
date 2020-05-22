import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ChipComponent } from './chip.component';
import { ChipsModule } from './../chips.module';

describe('ChipComponent', () => {
  @Component({
    selector: 'app-chip-spec',
    template: ` <app-chips
      ><app-chip></app-chip><app-chips></app-chips
    ></app-chips>`,
  })
  class ChipComponentSpec {}

  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipComponentSpec],
      imports: [ChipsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
