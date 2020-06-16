import { ChordType, FretMap, ModeMap } from '../../util/types';

export const aSharpPentatonicMajor: ModeMap = [
  {
    name: 'a',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A#',
  },
  {
    name: 'b',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B#'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: true,
    displayName: 'Cx'
  },
  {
    name: 'e',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E#'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: true,
    displayName: 'Fx'
  },
]

export const dFlatMajorPentatonic: ModeMap = [
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
]

export const fMinorPentatonic: ModeMap = [
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
]

export const gFlatMinorPentatonic: ModeMap = [
  {
    name: 'g',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: true,
    doubleSharp: false,
    displayName: 'B𝄫'
  },
  {
    name: 'c',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C♭'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F♭'
  },
]

export const eFlatMajorPentatonic: ModeMap = [
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
]

export const fSharpMajorPentatonic: ModeMap = [
  {
    name: 'f',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F#'
  },
  {
    name: 'g',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G#'
  },
  {
    name: 'a',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A#'
  },
  {
    name: 'c',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C#'
  },
  {
    name: 'd',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D#'
  },
]

export const eFlatMinorPentatonic: ModeMap = [
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'g',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G♭'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
]

export const aMajorPentatonic: ModeMap = [
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B'
  },
  {
    name: 'c',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C#'
  },
  {
    name: 'e',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E'
  },
  {
    name: 'f',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F#'
  },
]

export const aMinorPentatonic: ModeMap = [
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
]

export const cIonianMode: ModeMap = [
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B'
  },
];

export const dDorianMode: ModeMap = [
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
];

export const dHarmonicMinor: ModeMap = [
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C#'
  },
];

export const cHarmonicMinor: ModeMap = [
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B'
  },
];

export const fSharpHarmonicMinor: ModeMap = [
  {
    name: 'f',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F#'
  },
  {
    name: 'g',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G#'
  },
  {
    name: 'a',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B'
  },
  {
    name: 'c',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C#'
  },
  {
    name: 'd',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D'
  },
  {
    name: 'e',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E#'
  },
];

export const cPhrygianMode: ModeMap = [
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
];

export const bFlatPhrygian: ModeMap = [
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C♭'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F'
  },
  {
    name: 'g',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G♭'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
];

export const aFlatPhrygian: ModeMap = [
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
  {
    name: 'b',
    sharp: false,
    flat: false,
    doubleFlat: true,
    doubleSharp: false,
    displayName: 'B𝄫'
  },
  {
    name: 'c',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C♭'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F♭'
  },
  {
    name: 'g',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G♭'
  },
];

export const bFlatLocrian: ModeMap = [
  {
    name: 'b',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C♭'
  },
  {
    name: 'd',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D♭'
  },
  {
    name: 'e',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E♭'
  },
  {
    name: 'f',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F♭'
  },
  {
    name: 'g',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'G♭'
  },
  {
    name: 'a',
    sharp: false,
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A♭'
  },
];

export const aSharpMajor: ModeMap = [
  {
    name: 'a',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'A#'
  },
  {
    name: 'b',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'B#'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: true,
    displayName: 'Cx'
  },
  {
    name: 'd',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'D#'
  },
  {
    name: 'e',
    sharp: true,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'E#'
  },
  {
    name: 'f',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: true,
    displayName: 'Fx'
  },
  {
    name: 'g',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: true,
    displayName: 'Gx'
  },
];

export const cIonianFretMappings: FretMap = [
  { string: 'A', fret: 0, displayName: 'A', degree: 'submediant' },
  { string: 'A', fret: 2, displayName: 'B', degree: 'leadingTone' },
  { string: 'A', fret: 3, displayName: 'C', degree: 'tonic' },
  { string: 'A', fret: 5, displayName: 'D', degree: 'supertonic' },
  { string: 'A', fret: 7, displayName: 'E', degree: 'mediant' },
  { string: 'A', fret: 8, displayName: 'F', degree: 'subdominant' },
  { string: 'A', fret: 10, displayName: 'G', degree: 'dominant' },
  { string: 'A', fret: 12, displayName: 'A', degree: 'submediant' },
  { string: 'A', fret: 14, displayName: 'B', degree: 'leadingTone' },
  { string: 'A', fret: 15, displayName: 'C', degree: 'tonic' },
  { string: 'A', fret: 17, displayName: 'D', degree: 'supertonic' },
  { string: 'A', fret: 19, displayName: 'E', degree: 'mediant' },
  { string: 'A', fret: 20, displayName: 'F', degree: 'subdominant' },
  { string: 'A', fret: 22, displayName: 'G', degree: 'dominant' },
  { string: 'A', fret: 24, displayName: 'A', degree: 'submediant' },
  { string: 'B', fret: 0, displayName: 'B', degree: 'leadingTone' },
  { string: 'B', fret: 1, displayName: 'C', degree: 'tonic' },
  { string: 'B', fret: 3, displayName: 'D', degree: 'supertonic' },
  { string: 'B', fret: 5, displayName: 'E', degree: 'mediant' },
  { string: 'B', fret: 6, displayName: 'F', degree: 'subdominant' },
  { string: 'B', fret: 8, displayName: 'G', degree: 'dominant' },
  { string: 'B', fret: 10, displayName: 'A', degree: 'submediant' },
  { string: 'B', fret: 12, displayName: 'B', degree: 'leadingTone' },
  { string: 'B', fret: 13, displayName: 'C', degree: 'tonic' },
  { string: 'B', fret: 15, displayName: 'D', degree: 'supertonic' },
  { string: 'B', fret: 17, displayName: 'E', degree: 'mediant' },
  { string: 'B', fret: 18, displayName: 'F', degree: 'subdominant' },
  { string: 'B', fret: 20, displayName: 'G', degree: 'dominant' },
  { string: 'B', fret: 22, displayName: 'A', degree: 'submediant' },
  { string: 'B', fret: 24, displayName: 'B', degree: 'leadingTone' },
  { string: 'D', fret: 0, displayName: 'D', degree: 'supertonic' },
  { string: 'D', fret: 2, displayName: 'E', degree: 'mediant' },
  { string: 'D', fret: 3, displayName: 'F', degree: 'subdominant' },
  { string: 'D', fret: 5, displayName: 'G', degree: 'dominant' },
  { string: 'D', fret: 7, displayName: 'A', degree: 'submediant' },
  { string: 'D', fret: 9, displayName: 'B', degree: 'leadingTone' },
  { string: 'D', fret: 10, displayName: 'C', degree: 'tonic' },
  { string: 'D', fret: 12, displayName: 'D', degree: 'supertonic' },
  { string: 'D', fret: 14, displayName: 'E', degree: 'mediant' },
  { string: 'D', fret: 15, displayName: 'F', degree: 'subdominant' },
  { string: 'D', fret: 17, displayName: 'G', degree: 'dominant' },
  { string: 'D', fret: 19, displayName: 'A', degree: 'submediant' },
  { string: 'D', fret: 21, displayName: 'B', degree: 'leadingTone' },
  { string: 'D', fret: 22, displayName: 'C', degree: 'tonic' },
  { string: 'D', fret: 24, displayName: 'D', degree: 'supertonic' },
  { string: 'E', fret: 0, displayName: 'E', degree: 'mediant' },
  { string: 'E', fret: 1, displayName: 'F', degree: 'subdominant' },
  { string: 'E', fret: 3, displayName: 'G', degree: 'dominant' },
  { string: 'E', fret: 5, displayName: 'A', degree: 'submediant' },
  { string: 'E', fret: 7, displayName: 'B', degree: 'leadingTone' },
  { string: 'E', fret: 8, displayName: 'C', degree: 'tonic' },
  { string: 'E', fret: 10, displayName: 'D', degree: 'supertonic' },
  { string: 'E', fret: 12, displayName: 'E', degree: 'mediant' },
  { string: 'E', fret: 13, displayName: 'F', degree: 'subdominant' },
  { string: 'E', fret: 15, displayName: 'G', degree: 'dominant' },
  { string: 'E', fret: 17, displayName: 'A', degree: 'submediant' },
  { string: 'E', fret: 19, displayName: 'B', degree: 'leadingTone' },
  { string: 'E', fret: 20, displayName: 'C', degree: 'tonic' },
  { string: 'E', fret: 22, displayName: 'D', degree: 'supertonic' },
  { string: 'E', fret: 24, displayName: 'E', degree: 'mediant' },
  { string: 'G', fret: 0, displayName: 'G', degree: 'dominant' },
  { string: 'G', fret: 2, displayName: 'A', degree: 'submediant' },
  { string: 'G', fret: 4, displayName: 'B', degree: 'leadingTone' },
  { string: 'G', fret: 5, displayName: 'C', degree: 'tonic' },
  { string: 'G', fret: 7, displayName: 'D', degree: 'supertonic' },
  { string: 'G', fret: 9, displayName: 'E', degree: 'mediant' },
  { string: 'G', fret: 10, displayName: 'F', degree: 'subdominant' },
  { string: 'G', fret: 12, displayName: 'G', degree: 'dominant' },
  { string: 'G', fret: 14, displayName: 'A', degree: 'submediant' },
  { string: 'G', fret: 16, displayName: 'B', degree: 'leadingTone' },
  { string: 'G', fret: 17, displayName: 'C', degree: 'tonic' },
  { string: 'G', fret: 19, displayName: 'D', degree: 'supertonic' },
  { string: 'G', fret: 21, displayName: 'E', degree: 'mediant' },
  { string: 'G', fret: 22, displayName: 'F', degree: 'subdominant' },
  { string: 'G', fret: 24, displayName: 'G', degree: 'dominant' },
];

export const dIonianFretMappings: FretMap = [
  { string: 'A', fret: 0, displayName: 'A', degree: 'dominant' },
  { string: 'A', fret: 2, displayName: 'B', degree: 'submediant' },
  { string: 'A', fret: 4, displayName: 'C#', degree: 'leadingTone' },
  { string: 'A', fret: 5, displayName: 'D', degree: 'tonic' },
  { string: 'A', fret: 7, displayName: 'E', degree: 'supertonic' },
  { string: 'A', fret: 9, displayName: 'F#', degree: 'mediant' },
  { string: 'A', fret: 10, displayName: 'G', degree: 'subdominant' },
  { string: 'A', fret: 12, displayName: 'A', degree: 'dominant' },
  { string: 'A', fret: 14, displayName: 'B', degree: 'submediant' },
  { string: 'A', fret: 16, displayName: 'C#', degree: 'leadingTone' },
  { string: 'A', fret: 17, displayName: 'D', degree: 'tonic' },
  { string: 'A', fret: 19, displayName: 'E', degree: 'supertonic' },
  { string: 'A', fret: 21, displayName: 'F#', degree: 'mediant' },
  { string: 'A', fret: 22, displayName: 'G', degree: 'subdominant' },
  { string: 'A', fret: 24, displayName: 'A', degree: 'dominant' },
  { string: 'B', fret: 0, displayName: 'B', degree: 'submediant' },
  { string: 'B', fret: 2, displayName: 'C#', degree: 'leadingTone' },
  { string: 'B', fret: 3, displayName: 'D', degree: 'tonic' },
  { string: 'B', fret: 5, displayName: 'E', degree: 'supertonic' },
  { string: 'B', fret: 7, displayName: 'F#', degree: 'mediant' },
  { string: 'B', fret: 8, displayName: 'G', degree: 'subdominant' },
  { string: 'B', fret: 10, displayName: 'A', degree: 'dominant' },
  { string: 'B', fret: 12, displayName: 'B', degree: 'submediant' },
  { string: 'B', fret: 14, displayName: 'C#', degree: 'leadingTone' },
  { string: 'B', fret: 15, displayName: 'D', degree: 'tonic' },
  { string: 'B', fret: 17, displayName: 'E', degree: 'supertonic' },
  { string: 'B', fret: 19, displayName: 'F#', degree: 'mediant' },
  { string: 'B', fret: 20, displayName: 'G', degree: 'subdominant' },
  { string: 'B', fret: 22, displayName: 'A', degree: 'dominant' },
  { string: 'B', fret: 24, displayName: 'B', degree: 'submediant' },
  { string: 'D', fret: 0, displayName: 'D', degree: 'tonic' },
  { string: 'D', fret: 2, displayName: 'E', degree: 'supertonic' },
  { string: 'D', fret: 4, displayName: 'F#', degree: 'mediant' },
  { string: 'D', fret: 5, displayName: 'G', degree: 'subdominant' },
  { string: 'D', fret: 7, displayName: 'A', degree: 'dominant' },
  { string: 'D', fret: 9, displayName: 'B', degree: 'submediant' },
  { string: 'D', fret: 11, displayName: 'C#', degree: 'leadingTone' },
  { string: 'D', fret: 12, displayName: 'D', degree: 'tonic' },
  { string: 'D', fret: 14, displayName: 'E', degree: 'supertonic' },
  { string: 'D', fret: 16, displayName: 'F#', degree: 'mediant' },
  { string: 'D', fret: 17, displayName: 'G', degree: 'subdominant' },
  { string: 'D', fret: 19, displayName: 'A', degree: 'dominant' },
  { string: 'D', fret: 21, displayName: 'B', degree: 'submediant' },
  { string: 'D', fret: 23, displayName: 'C#', degree: 'leadingTone' },
  { string: 'D', fret: 24, displayName: 'D', degree: 'tonic' },
  { string: 'E', fret: 0, displayName: 'E', degree: 'supertonic' },
  { string: 'E', fret: 2, displayName: 'F#', degree: 'mediant' },
  { string: 'E', fret: 3, displayName: 'G', degree: 'subdominant' },
  { string: 'E', fret: 5, displayName: 'A', degree: 'dominant' },
  { string: 'E', fret: 7, displayName: 'B', degree: 'submediant' },
  { string: 'E', fret: 9, displayName: 'C#', degree: 'leadingTone' },
  { string: 'E', fret: 10, displayName: 'D', degree: 'tonic' },
  { string: 'E', fret: 12, displayName: 'E', degree: 'supertonic' },
  { string: 'E', fret: 14, displayName: 'F#', degree: 'mediant' },
  { string: 'E', fret: 15, displayName: 'G', degree: 'subdominant' },
  { string: 'E', fret: 17, displayName: 'A', degree: 'dominant' },
  { string: 'E', fret: 19, displayName: 'B', degree: 'submediant' },
  { string: 'E', fret: 21, displayName: 'C#', degree: 'leadingTone' },
  { string: 'E', fret: 22, displayName: 'D', degree: 'tonic' },
  { string: 'E', fret: 24, displayName: 'E', degree: 'supertonic' },
  { string: 'G', fret: 0, displayName: 'G', degree: 'subdominant' },
  { string: 'G', fret: 2, displayName: 'A', degree: 'dominant' },
  { string: 'G', fret: 4, displayName: 'B', degree: 'submediant' },
  { string: 'G', fret: 6, displayName: 'C#', degree: 'leadingTone' },
  { string: 'G', fret: 7, displayName: 'D', degree: 'tonic' },
  { string: 'G', fret: 9, displayName: 'E', degree: 'supertonic' },
  { string: 'G', fret: 11, displayName: 'F#', degree: 'mediant' },
  { string: 'G', fret: 12, displayName: 'G', degree: 'subdominant' },
  { string: 'G', fret: 14, displayName: 'A', degree: 'dominant' },
  { string: 'G', fret: 16, displayName: 'B', degree: 'submediant' },
  { string: 'G', fret: 18, displayName: 'C#', degree: 'leadingTone' },
  { string: 'G', fret: 19, displayName: 'D', degree: 'tonic' },
  { string: 'G', fret: 21, displayName: 'E', degree: 'supertonic' },
  { string: 'G', fret: 23, displayName: 'F#', degree: 'mediant' },
  { string: 'G', fret: 24, displayName: 'G', degree: 'subdominant' },
];

export const cMajorPentatonicChordMap = [
  {
    note: 'C',
    type: ChordType.major,
  },
  {
    note: 'D',
    type: ChordType.minor,
  },
  {
    note: 'E',
    type: ChordType.minor,
  },
  {
    note: 'G',
    type: ChordType.major,
  },
  {
    note: 'A',
    type: ChordType.minor,
  },
]

export const cMinorPentatonicChordMap = [
  {
    note: 'C',
    type: ChordType.minor,
  },
  {
    note: 'E♭',
    type: ChordType.major,
  },
  {
    note: 'F',
    type: ChordType.major,
  },
  {
    note: 'G',
    type: ChordType.minor,
  },
  {
    note: 'B♭',
    type: ChordType.major,
  },
]

export const cIonianChordMap = [
  {
    note: 'C',
    type: ChordType.major,
  },
  {
    note: 'D',
    type: ChordType.minor,
  },
  {
    note: 'E',
    type: ChordType.minor,
  },
  {
    note: 'F',
    type: ChordType.major,
  },
  {
    note: 'G',
    type: ChordType.major,
  },
  {
    note: 'A',
    type: ChordType.minor,
  },
  {
    note: 'B',
    type: ChordType.diminished,
  },
]
