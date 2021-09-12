import { IsTheoreticalScalePipe } from './is-theoretical-scale.pipe';
import {
  fMinorPentatonic,
  gFlatMinorPentatonic
} from '../fret-map/fret-map.service.testConstants';

describe('IsTheoreticalScalePipe', () => {
  let pipe: IsTheoreticalScalePipe;

  beforeEach(() => {
    pipe = new IsTheoreticalScalePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns true for a scale with a double flat in', () => {
    expect(pipe.transform(gFlatMinorPentatonic)).toBe(true);
  });

  it('returns false for scales without double flat or double sharp', () => {
    expect(pipe.transform(fMinorPentatonic)).toBe(false);
  });
});
