import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoaderComponent } from './video-loader.component';

xdescribe('VideoLoaderComponent', () => {
  let component: VideoLoaderComponent;
  let fixture: ComponentFixture<VideoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
