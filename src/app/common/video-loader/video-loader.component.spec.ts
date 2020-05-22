import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoaderComponent } from './video-loader.component';
import { Component } from '@angular/core';
import { VideoLoaderModule } from './video-loader.module';
import { JamTracksData } from '../../data/jamTracks';

xdescribe('VideoLoaderComponent', () => {


  @Component({
    selector: 'app-video-loader',
    template: `
      <app-video-loader></app-video-loader>
    `,
  })
  class VideoServerComponentSpec {
  }

  let component: VideoLoaderComponent;
  let fixture: ComponentFixture<VideoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoLoaderComponent],
      imports: [VideoLoaderModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLoaderComponent);
    component = fixture.componentInstance;
    component.jamTrack = JamTracksData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
