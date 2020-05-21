import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoServerComponent } from './video-server.component';

describe('VideoServerComponent', () => {
  let component: VideoServerComponent;
  let fixture: ComponentFixture<VideoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
