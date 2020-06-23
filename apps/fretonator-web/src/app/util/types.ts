export interface Fret {
  string: string;
  fret: number;
  displayName: string;
  degree: string;
}

export enum ChordType {
  major = 'maj',
  minor = 'min',
  diminished = 'dim',
  augmented = 'aug'
}

export interface Chord {
  note: string;
  type: ChordType;
}

export type FretMap = Fret[];

export type ChordMap = Chord[];

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
  phrygian = 'phrygian',
  lydian = 'lydian',
  mixolydian = 'mixolydian',
  aeolian = 'aeolian',
  locrian = 'locrian',
  harmonicMinor = 'harmonicMinor',
  phrygianDominant = 'phrygianDominant',
  majorPentatonic = 'majorPentatonic',
  minorPentatonic = 'minorPentatonic'
}

export interface JamTrack {
  key: NoteSymbol;
  mode: Mode;
  youTubeId: string;
  title: string;
  creator: string;
}

export type JamTracks = JamTrack[];

export interface NoteObject {
  name: string;
  flat: boolean;
  sharp: boolean;
  doubleFlat: boolean;
  doubleSharp: boolean;
  displayName?: string;
  degree?: string;
}

export type ModeMap = NoteObject[];

export enum NoteExtenderString {
  sharp = 'sharp',
  natural = 'natural',
  flat = 'flat'
}

export enum NoteExtenderSymbol {
  sharp = '#',
  natural = '',
  flat = '_'
}

export interface SimilarMode {
  noteDisplayName: string,
  note: string,
  noteExtender: NoteExtenderString;
  mode: Mode,
}

export type SimilarModes = SimilarMode[];
