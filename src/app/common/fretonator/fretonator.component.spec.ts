import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretonatorComponent } from './fretonator.component';

describe('FretonatorComponent', () => {
  let component: FretonatorComponent;
  let fixture: ComponentFixture<FretonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
