import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarModesComponent } from './similar-modes.component';

describe('SimilarModesComponent', () => {
  let component: SimilarModesComponent;
  let fixture: ComponentFixture<SimilarModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
