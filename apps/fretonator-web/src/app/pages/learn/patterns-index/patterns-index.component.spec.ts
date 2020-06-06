import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsIndexComponent } from './patterns-index.component';

xdescribe('PatternsIndexComponent', () => {
  let component: PatternsIndexComponent;
  let fixture: ComponentFixture<PatternsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
