function cartesianProduct(arr) {
  return arr.reduce(function(a, b) {
    return a.map(function(x) {
      return b.map(function(y) {
        return x.concat([y]);
      });
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }, [[]]);
}

enum NoteExtenderString {
  sharp = 'sharp',
  natural = 'natural',
  flat = 'flat'
}

enum Mode {
  ionian = 'ionian',
  dorian = 'dorian',
  phrygian = 'phrygian',
  lydian = 'lydian',
  mixolydian = 'mixolydian',
  aeolian = 'aeolian',
  locrian = 'locrian',
  harmonicMinor = 'harmonicMinor',
  phrygianDominant = 'phrygianDominant',
  aeolianDominant = 'aeolianDominant',
  majorPentatonic = 'majorPentatonic',
  minorPentatonic = 'minorPentatonic'
}

const Octave = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

enum NoteSymbol {
  aFlat = 'a_',
  a = 'a',
  aSharp = 'a#',
  bFlat = 'b_',
  b = 'b',
  c = 'c',
  cSharp = 'c#',
  dFlat = 'd_',
  d = 'd',
  dSharp = 'd#',
  eFlat = 'e_',
  e = 'e',
  f = 'f',
  fSharp = 'f#',
  gFlat = 'g_',
  g = 'g',
  gSharp = 'g#',
}

enum NoteExtenderSymbol {
  sharp = '#',
  natural = '',
  flat = '_'
}

export default (): string[] => {
  const octave = Octave;
  const noteExtender = Object.values(NoteExtenderString);
  const mode = Object.values(Mode);
  const product = cartesianProduct([octave, noteExtender, mode]);

  return product
    .filter(([key, extender, mode]) => {
      const extenderSymbol = NoteExtenderSymbol[extender];
      const validCombination = Object.values(NoteSymbol).find(value => value === `${key}${extenderSymbol}`);
      return Boolean(validCombination);
    })
    .map(combination => ['', ...combination].join('/'));
}

