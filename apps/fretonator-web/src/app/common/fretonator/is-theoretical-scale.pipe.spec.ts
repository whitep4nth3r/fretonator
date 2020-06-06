import { IsTheoreticalScalePipe } from './is-theoretical-scale.pipe';

describe('IsTheoreticalScalePipe', () => {
  let pipe: IsTheoreticalScalePipe;

  beforeEach(() => {
    pipe = new IsTheoreticalScalePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns true for a scale with a double flat in', () => {
    expect(pipe.transform(['C', 'D𝄫'])).toBe(true);
  });

  it('returns true for a scale with a double sharp in', () => {
    expect(pipe.transform(['Cx', 'D'])).toBe(true);
  });

  it('returns false for scales without double flat or double sharp', () => {
    expect(pipe.transform(['C', 'D'])).toBe(false);
  });
});
