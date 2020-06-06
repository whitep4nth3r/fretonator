import { GetEnharmonicRouterLinkPipe } from './get-enharmonic-router-link.pipe';

describe('GetEnharmonicRouterLinkPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new GetEnharmonicRouterLinkPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns correctly for g sharp ionian', () => {
    expect(pipe.transform('g', 'sharp', 'ionian')).toStrictEqual(['/', 'a', 'flat', 'ionian']);
  });
});
