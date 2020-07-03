import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardConfigComponent } from './fretboard-config.component';

describe('FretboardConfigComponent', () => {
  let component: FretboardConfigComponent;
  let fixture: ComponentFixture<FretboardConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretboardConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretboardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
