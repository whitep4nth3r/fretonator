import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoaderComponent } from './video-loader.component';
import { Component } from '@angular/core';
import { VideoLoaderModule } from './video-loader.module';

describe('VideoLoaderComponent', () => {

  @Component({
    selector: 'app-video-loader-spec',
    template: `
      <app-video-loader
        [jamTrack]="{key: 'c', mode: 'ionian', youTubeId: 'oMZz2FeV8q4', title: 'C Ionian (Major) Jam Track', creator: 'Tom Strahle'}">
      </app-video-loader>
    `
  })
  class VideoLoaderComponentSpec {
  }

  let component: VideoLoaderComponentSpec;
  let fixture: ComponentFixture<VideoLoaderComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoLoaderComponentSpec],
      imports: [VideoLoaderModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLoaderComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
