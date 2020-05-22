import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoServerComponent} from './video-server.component';
import {Component} from '@angular/core';
import {VideoLoaderModule} from '../video-loader.module';

describe('VideoServerComponent', () => {
  @Component({
    selector: 'app-video-server-spec',
    template: `
      <app-video-server></app-video-server>
    `,
  })
  class VideoServerComponentSpec {
  }

  let component: VideoServerComponent;
  let fixture: ComponentFixture<VideoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoServerComponentSpec],
      imports: [VideoLoaderModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
