import { YouTubeEmbedPipe } from './youtube-embed.pipe';
import { async, TestBed } from '@angular/core/testing';

describe('YoutubeEmbedPipe', () => {
  let pipe: YouTubeEmbedPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeEmbedPipe]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    pipe = TestBed.inject(YouTubeEmbedPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns a SafeResourceUrl', () => {
    const result = pipe.transform('123') as any;
    expect(result.getTypeName()).toBe('ResourceURL');
  });

  it('returns the correct resource', () => {
    const result = pipe.transform('123') as any;
    expect(result.changingThisBreaksApplicationSecurity).toBe('https://www.youtube.com/embed/123');
  });

});
