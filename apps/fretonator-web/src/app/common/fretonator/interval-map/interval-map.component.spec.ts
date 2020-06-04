import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalMapComponent } from './interval-map.component';

describe('IntervalMapComponent', () => {
  let component: IntervalMapComponent;
  let fixture: ComponentFixture<IntervalMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
