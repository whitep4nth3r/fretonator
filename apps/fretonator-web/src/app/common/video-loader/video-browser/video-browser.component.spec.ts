import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBrowserComponent } from './video-browser.component';
import { VideoLoaderModule } from '../video-loader.module';
import { Component } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

describe('VideoBrowserComponent', () => {

  @Component({
    selector: 'app-video-browser-spec',
    template: `
      <app-video-browser [youTubeId]="youTubeId" [title]="title"></app-video-browser>
    `,
  })
  class VideoBrowserComponentSpec {
    youTubeId = 'test123';
    title = 'testTitle';
  }

  let component: VideoBrowserComponentSpec;
  let fixture: ComponentFixture<VideoBrowserComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoBrowserComponentSpec,
      ],
      imports: [
        VideoLoaderModule,
        BrowserTestingModule
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrowserComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
