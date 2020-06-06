import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIndexComponent } from './learn-index.component';

describe('LearnIndexComponent', () => {
  let component: LearnIndexComponent;
  let fixture: ComponentFixture<LearnIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
