import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundIndexComponent } from './not-found-index.component';

describe('NotFoundIndexComponent', () => {
  let component: NotFoundIndexComponent;
  let fixture: ComponentFixture<NotFoundIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
