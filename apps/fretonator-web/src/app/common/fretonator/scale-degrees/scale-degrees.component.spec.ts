import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleDegreesComponent } from './scale-degrees.component';

describe('ScaleDegreesComponent', () => {
  let component: ScaleDegreesComponent;
  let fixture: ComponentFixture<ScaleDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
