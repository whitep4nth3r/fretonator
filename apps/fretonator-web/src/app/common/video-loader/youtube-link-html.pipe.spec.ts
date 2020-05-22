import { YoutubeLinkHtmlPipe } from './youtube-link-html.pipe';
import { async, TestBed } from '@angular/core/testing';

describe('YouTubeLinkHtmlPipe', () => {
  let pipe: YoutubeLinkHtmlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeLinkHtmlPipe]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    pipe = TestBed.inject(YoutubeLinkHtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns HTML', () => {
    const result = pipe.transform('123') as any;
    expect(result.getTypeName()).toBe('HTML');
  });

  it('returns the correct resource', () => {
    const result = pipe.transform('123') as any;
    expect(result.changingThisBreaksApplicationSecurity).toBe('https://www.youtube.com/watch?v=123');
  });

});
