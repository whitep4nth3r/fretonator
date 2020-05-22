import { SymbolToNoteObjPipe } from './symbol-to-note-obj.pipe';

describe('SymbolToNoteObjPipe', () => {
  it('creates an instance', () => {
    const pipe = new SymbolToNoteObjPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns a d sharp note object given c# is provided', () => {
    const pipe = new SymbolToNoteObjPipe();
    const result = pipe.transform('d', '#');

    expect(result).toEqual({
      name: 'd',
      flat: false,
      sharp: true,
      doubleFlat: false,
      doubleSharp: false,
    });
  });

  it('returns a d flat note object given d_ is provided', () => {
    const pipe = new SymbolToNoteObjPipe();
    const result = pipe.transform('d', '_');

    expect(result).toEqual({
      name: 'd',
      flat: true,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false,
    });
  });

  it('returns d natural note object given d is provided', () => {
    const pipe = new SymbolToNoteObjPipe();
    const result = pipe.transform('d', '');

    expect(result).toEqual({
      name: 'd',
      flat: false,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false,
    });
  });
});
