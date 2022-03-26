import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoServerComponent } from './video-server.component';
import { Component } from '@angular/core';
import { VideoLoaderModule } from '../video-loader.module';

describe('VideoServerComponent', () => {
  @Component({
    selector: 'app-video-server-spec',
    template: `
      <app-video-server [youTubeId]="'123'"></app-video-server>
    `
  })
  class VideoServerSpecComponent {
  }

  let component: VideoServerComponent;
  let fixture: ComponentFixture<VideoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoServerSpecComponent],
      imports: [VideoLoaderModule]
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
