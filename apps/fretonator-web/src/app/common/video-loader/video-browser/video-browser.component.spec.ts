import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoaderModule } from '../video-loader.module';
import { Component } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

describe('VideoBrowserComponent', () => {

  @Component({
    selector: 'app-video-browser-spec',
    template: `
      <app-video-browser [youTubeId]="youTubeId" [title]="title"></app-video-browser>
    `
  })
  class VideoBrowserSpecComponent {
    youTubeId = 'test123';
    title = 'testTitle';
  }

  let component: VideoBrowserSpecComponent;
  let fixture: ComponentFixture<VideoBrowserSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoBrowserSpecComponent
      ],
      imports: [
        VideoLoaderModule,
        BrowserTestingModule
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrowserSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
