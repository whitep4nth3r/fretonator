import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIndexComponent } from './about-index.component';

describe('AboutIndexComponent', () => {
  let component: AboutIndexComponent;
  let fixture: ComponentFixture<AboutIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutIndexComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
