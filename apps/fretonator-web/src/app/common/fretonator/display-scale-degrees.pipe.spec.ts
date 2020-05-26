import { DisplayScaleDegreesPipe } from './display-scale-degrees.pipe';
import { consoleTestResultsHandler } from 'tslint/lib/test';

describe('DisplayScaleDegreesPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new DisplayScaleDegreesPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns true for ionian', () => {
    const result = pipe.transform('ionian');
    expect(result).toBe(true);
  });

  it('returns false for minorPentatonic', () => {
    const result = pipe.transform('minorPentatonic');
    expect(result).toBe(false);
  });

  it('returns false for majorPentatonic', () => {
    const result = pipe.transform('majorPentatonic');
    expect(result).toBe(false);
  });
});

