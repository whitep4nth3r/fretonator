import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleMapComponent } from './scale-map.component';

describe('ScaleMapComponent', () => {
  let component: ScaleMapComponent;
  let fixture: ComponentFixture<ScaleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
