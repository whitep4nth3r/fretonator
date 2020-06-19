import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';

describe('GetNoteFromFretMapPipe', () => {
  it('create an instance', () => {
    const pipe = new GetFretFromFretMapPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns a truthy value if the note is found in the fret map', () => {
    const pipe = new GetFretFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D', degree: 'tonic' }],
      'A',
      5,
      false,
    );

    expect(result).toBeTruthy();
  });

  it('returns false if the note is not found in the fret map', () => {
    const pipe = new GetFretFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D', degree: 'tonic' }],
      'B',
      5,
      false,
    );

    expect(result).toBe(false);
  });


  fit('deals with case sensitivity', () => {
    const pipe = new GetFretFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'E', fret: 5, displayName: 'A', degree: 'tonic' }],
      'e',
      5,
      true,
    );

    expect(result).toBe(false);
  });
});
