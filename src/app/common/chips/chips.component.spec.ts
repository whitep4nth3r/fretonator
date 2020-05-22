import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ChipsModule } from './chips.module';
import { ChipsComponent } from './chips.component';

describe('ChipsComponent', () => {
  @Component({
    selector: 'app-chips-spec',
    template: `
      <app-chips>
        <app-chip
          [id]="id"
          [value]="thing"
          [disabled]="false"
          [rounded]="false"
        ></app-chip>
      </app-chips>
    `,
  })
  class ChipsComponentSpec {}

  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsComponentSpec],
      imports: [ChipsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
