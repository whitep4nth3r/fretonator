import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeBannerComponent } from './stripe-banner.component';

describe('StripeBannerComponent', () => {
  let component: StripeBannerComponent;
  let fixture: ComponentFixture<StripeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
