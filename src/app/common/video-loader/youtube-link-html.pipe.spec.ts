import { YoutubeLinkHtmlPipe } from './youtube-link-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('YouTubeLinkHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    domSanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new YoutubeLinkHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });

  xit('returns an embed a watch link', () => {
    const pipe = new YoutubeLinkHtmlPipe(domSanitizer);
    const result = pipe.transform('123');
    expect(result).toBe('https://www.youtube.com/watch?v=123');
  });
});
