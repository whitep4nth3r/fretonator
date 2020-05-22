import { TestBed } from '@angular/core/testing';
import { YouTubeLinkPipe } from './youtube-link.pipe';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

describe('YoutubeLinkPipe', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    domSanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new YouTubeLinkPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });

  xit('returns a SafeUrl', () => {
    const pipe = new YouTubeLinkPipe(domSanitizer);
    const result = pipe.transform('123');
    const expected: SafeUrl = {changingThisBreaksApplicationSecurity: 'https://www.youtube.com/watch?v=123', };
    expect(result).toBe(expected);
  });
});
