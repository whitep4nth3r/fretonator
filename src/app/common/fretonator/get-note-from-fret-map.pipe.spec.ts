import { GetNoteFromFretMapPipe } from './get-note-from-fret-map.pipe';

describe('GetNoteFromFretMapPipe', () => {
  it('create an instance', () => {
    const pipe = new GetNoteFromFretMapPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns a truthy value if the note is found in the fret map', () => {
    const pipe = new GetNoteFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D' }],
      'A',
      5
    );

    expect(result).toBeTruthy();
  });

  it('returns false if the note is not found in the fret map', () => {
    const pipe = new GetNoteFromFretMapPipe();
    const result = pipe.transform(
      [{ string: 'A', fret: 5, displayName: 'D' }],
      'B',
      5
    );

    expect(result).toBe(false);
  });
});
