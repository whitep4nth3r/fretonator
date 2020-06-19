import { GetIntervalPatternFromModePipe } from './get-interval-pattern-from-mode.pipe';
import { Mode } from '../../../util/types';

describe('GetIntervalPatternFromModePipe', () => {
  it('create an instance', () => {
    const pipe = new GetIntervalPatternFromModePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns a mode pattern', () => {
    const pipe = new GetIntervalPatternFromModePipe();
    const result = pipe.transform(Mode.ionian);
    expect(result).toEqual([2, 2, 1, 2, 2, 2, 1]);
  });
});
