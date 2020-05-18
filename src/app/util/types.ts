export interface Fret {
  string: string;
  fret: number;
  displayName: string;
}

export type FretMap = Fret[];

export enum NoteSymbol {
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

export enum Mode {
  ionian = 'ionian',
  dorian = 'dorian',
  phyrgian = 'phrygian',
  lydian = 'lydian',
  mixolydian = 'mixolydian',
  aolian = 'aolian',
  locrian = 'locrian',
}

export interface NoteObject {
  name: string;
  flat: boolean;
  sharp: boolean;
  doubleFlat: boolean;
  doubleSharp: boolean;
  displayName?: string;
}
