import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Component} from '@angular/core';
import {VideoLoaderModule} from './video-loader.module';
import {Mode, NoteSymbol} from '../../util/types';

describe('VideoLoaderComponent', () => {

  @Component({
    selector: 'app-video-loader-spec',
    template: `
      <app-video-loader
        [jamTrack]="{key: ${NoteSymbol.c}, mode: ${Mode.ionian}, youTubeId: 'oMZz2FeV8q4', title: 'C Ionian (Major) Jam Track', creator: 'Tom Strahle'}">
      </app-video-loader>
    `,
  })
  class VideoLoaderSpecComponent {
  }

  let component: VideoLoaderSpecComponent;
  let fixture: ComponentFixture<VideoLoaderSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoLoaderSpecComponent],
      imports: [VideoLoaderModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLoaderSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
