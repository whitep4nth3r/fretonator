import { YouTubeEmbedPipe } from './youtube-embed.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('YoutubeEmbedPipe', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    domSanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new YouTubeEmbedPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
