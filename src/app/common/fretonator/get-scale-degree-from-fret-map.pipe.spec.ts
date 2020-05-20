import { GetScaleDegreeFromFretMapPipe } from './get-scale-degree-from-fret-map.pipe';

describe('GetScaleDegreeFromFretMapPipe', () => {
  it('create an instance', () => {
    const pipe = new GetScaleDegreeFromFretMapPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns the degree value if the note is found in the fret map', () => {
    const pipe = new GetScaleDegreeFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D', degree: 'tonic' }],
      'A',
      5
    );

    expect(result).toBe('tonic');
  });

  it('returns false if the note is not found in the fret map', () => {
    const pipe = new GetScaleDegreeFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D', degree: 'tonic' }],
      'B',
      5
    );

    expect(result).toBe(false);
  });
});
