import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBrowserComponent } from './video-browser.component';

describe('VideoBrowserComponent', () => {
  let component: VideoBrowserComponent;
  let fixture: ComponentFixture<VideoBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
