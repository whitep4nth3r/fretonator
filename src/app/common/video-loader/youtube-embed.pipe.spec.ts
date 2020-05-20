import { YouTubeEmbedPipe } from './youtube-embed.pipe';

describe('YoutubeEmbedPipe', () => {
  it('create an instance', () => {
    const pipe = new YouTubeEmbedPipe();
    expect(pipe).toBeTruthy();
  });
});
