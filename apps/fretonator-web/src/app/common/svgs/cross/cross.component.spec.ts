import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossComponent } from './cross.component';

describe('CrossComponent', () => {
  let component: CrossComponent;
  let fixture: ComponentFixture<CrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
