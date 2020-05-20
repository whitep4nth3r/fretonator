import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorComponent } from './fretonator.component';
import {FretonatorModule} from './fretonator.module';

describe('FretonatorComponent', () => {
  let component: FretonatorComponent;
  let fixture: ComponentFixture<FretonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FretonatorModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
