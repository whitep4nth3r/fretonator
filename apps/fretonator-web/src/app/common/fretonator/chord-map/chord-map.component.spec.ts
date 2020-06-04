import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordMapComponent } from './chord-map.component';

describe('ChordMapComponent', () => {
  let component: ChordMapComponent;
  let fixture: ComponentFixture<ChordMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
