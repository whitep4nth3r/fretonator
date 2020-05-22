import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoServerComponent } from './video-server.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { VideoLoaderModule } from '../video-loader.module';

describe('VideoServerComponent', () => {
  @Component({
    selector: 'app-video-server',
    template: `
      <app-video-server></app-video-server>
    `,
  })
  class VideoServerComponentSpec {
  }

  @Pipe({name: 'youTubeLink'})

  class YouTubeLinkPipeSpec implements PipeTransform {
    transform(value: number): number {
      return value;
    }
  }

  let component: VideoServerComponent;
  let fixture: ComponentFixture<VideoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoServerComponentSpec, YouTubeLinkPipeSpec],
      imports: [VideoLoaderModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoServerComponent);
    component = fixture.componentInstance;
    component.youTubeId = 'test123';
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
