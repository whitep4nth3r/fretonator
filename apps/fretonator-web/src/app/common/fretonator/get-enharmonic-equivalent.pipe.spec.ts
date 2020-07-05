import { GetEnharmonicEquivalentPipe } from './get-enharmonic-equivalent.pipe';

describe('GetHarmonicEquivalentPipe', () => {
  it('create an instance', () => {
    const pipe = new GetEnharmonicEquivalentPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns A♭ for G#', () => {
    const pipe = new GetEnharmonicEquivalentPipe();
    expect(pipe.transform('G#')).toBe('A♭');
  });
});
