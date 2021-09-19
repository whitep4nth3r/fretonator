import { ChordType, FretMap, ModeMap } from '../../util/types';
import { ScaleDegrees } from '../../util/constants';

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
  }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

export const cLydianMode: ModeMap = [
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
    sharp: true,
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
];

export const dAeolianDominant: ModeMap = [
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
    flat: true,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'F#'
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
    doubleSharp: true,
    displayName: 'B♭'
  },
  {
    name: 'c',
    sharp: false,
    flat: false,
    doubleFlat: false,
    doubleSharp: false,
    displayName: 'C'
  }
];


export const cIonianFretMappings: FretMap = [
  { string: 'A', fret: 0, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'A', fret: 2, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'A', fret: 3, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'A', fret: 5, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'A', fret: 7, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'A', fret: 8, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'A', fret: 10, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'A', fret: 12, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6  },
  { string: 'A', fret: 14, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'A', fret: 15, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'A', fret: 17, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'A', fret: 19, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'A', fret: 20, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'A', fret: 22, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'A', fret: 24, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'B', fret: 0, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'B', fret: 1, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'B', fret: 3, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'B', fret: 5, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'B', fret: 6, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'B', fret: 8, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'B', fret: 10, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'B', fret: 12, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'B', fret: 13, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'B', fret: 15, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'B', fret: 17, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'B', fret: 18, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'B', fret: 20, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'B', fret: 22, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'B', fret: 24, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'D', fret: 0, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'D', fret: 2, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'D', fret: 3, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'D', fret: 5, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'D', fret: 7, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'D', fret: 9, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'D', fret: 10, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'D', fret: 12, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'D', fret: 14, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'D', fret: 15, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'D', fret: 17, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'D', fret: 19, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'D', fret: 21, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'D', fret: 22, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'D', fret: 24, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'E', fret: 0, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'E', fret: 1, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'E', fret: 3, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'E', fret: 5, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'E', fret: 7, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'E', fret: 8, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'E', fret: 10, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'E', fret: 12, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'E', fret: 13, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'E', fret: 15, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'E', fret: 17, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'E', fret: 19, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'E', fret: 20, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'E', fret: 22, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'E', fret: 24, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'G', fret: 0, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'G', fret: 2, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'G', fret: 4, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'G', fret: 5, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'G', fret: 7, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'G', fret: 9, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'G', fret: 10, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'G', fret: 12, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'G', fret: 14, displayName: 'A', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'G', fret: 16, displayName: 'B', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'G', fret: 17, displayName: 'C', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'G', fret: 19, displayName: 'D', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'G', fret: 21, displayName: 'E', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'G', fret: 22, displayName: 'F', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'G', fret: 24, displayName: 'G', degree: ScaleDegrees.dominant, degreeNumber: 5 }
];

export const dIonianFretMappings: FretMap = [
  { string: 'A', fret: 0, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'A', fret: 2, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'A', fret: 4, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'A', fret: 5, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'A', fret: 7, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'A', fret: 9, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'A', fret: 10, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'A', fret: 12, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'A', fret: 14, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'A', fret: 16, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'A', fret: 17, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'A', fret: 19, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'A', fret: 21, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'A', fret: 22, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'A', fret: 24, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'B', fret: 0, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'B', fret: 2, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'B', fret: 3, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'B', fret: 5, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'B', fret: 7, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'B', fret: 8, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'B', fret: 10, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'B', fret: 12, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'B', fret: 14, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'B', fret: 15, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'B', fret: 17, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'B', fret: 19, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'B', fret: 20, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'B', fret: 22, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'B', fret: 24, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'D', fret: 0, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'D', fret: 2, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'D', fret: 4, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'D', fret: 5, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'D', fret: 7, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'D', fret: 9, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'D', fret: 11, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'D', fret: 12, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'D', fret: 14, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'D', fret: 16, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'D', fret: 17, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'D', fret: 19, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'D', fret: 21, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'D', fret: 23, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'D', fret: 24, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'E', fret: 0, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'E', fret: 2, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'E', fret: 3, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'E', fret: 5, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'E', fret: 7, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'E', fret: 9, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'E', fret: 10, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'E', fret: 12, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'E', fret: 14, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'E', fret: 15, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'E', fret: 17, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'E', fret: 19, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'E', fret: 21, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'E', fret: 22, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'E', fret: 24, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'G', fret: 0, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'G', fret: 2, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'G', fret: 4, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'G', fret: 6, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'G', fret: 7, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'G', fret: 9, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'G', fret: 11, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'G', fret: 12, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 },
  { string: 'G', fret: 14, displayName: 'A', degree: ScaleDegrees.dominant, degreeNumber: 5 },
  { string: 'G', fret: 16, displayName: 'B', degree: ScaleDegrees.submediant, degreeNumber: 6 },
  { string: 'G', fret: 18, displayName: 'C#', degree: ScaleDegrees.leadingTone, degreeNumber: 7 },
  { string: 'G', fret: 19, displayName: 'D', degree: ScaleDegrees.tonic, degreeNumber: 1 },
  { string: 'G', fret: 21, displayName: 'E', degree: ScaleDegrees.supertonic, degreeNumber: 2 },
  { string: 'G', fret: 23, displayName: 'F#', degree: ScaleDegrees.mediant, degreeNumber: 3 },
  { string: 'G', fret: 24, displayName: 'G', degree: ScaleDegrees.subdominant, degreeNumber: 4 }
];

export const cMajorPentatonicChordMap = [
  {
    note: 'C',
    type: ChordType.major,
    romanNumeral: '',
  },
  {
    note: 'D',
    type: ChordType.minor,
    romanNumeral: '',
  },
  {
    note: 'E',
    type: ChordType.minor,
    romanNumeral: '',
  },
  {
    note: 'G',
    type: ChordType.major,
    romanNumeral: '',
  },
  {
    note: 'A',
    type: ChordType.minor,
    romanNumeral: '',
  }
];

export const cMinorPentatonicChordMap = [
  {
    note: 'C',
    type: ChordType.minor,
    romanNumeral: '',
  },
  {
    note: 'E♭',
    type: ChordType.major,
    romanNumeral: '',
  },
  {
    note: 'F',
    type: ChordType.major,
    romanNumeral: '',
  },
  {
    note: 'G',
    type: ChordType.minor,
    romanNumeral: '',
  },
  {
    note: 'B♭',
    type: ChordType.major,
    romanNumeral: '',
  }
];

export const cIonianChordMap = [
  {
    note: 'C',
    type: ChordType.major,
    romanNumeral: 'I'
  },
  {
    note: 'D',
    type: ChordType.minor,
    romanNumeral: 'ii'
  },
  {
    note: 'E',
    type: ChordType.minor,
    romanNumeral: 'iii'
  },
  {
    note: 'F',
    type: ChordType.major,
    romanNumeral: 'IV'
  },
  {
    note: 'G',
    type: ChordType.major,
    romanNumeral: 'V'
  },
  {
    note: 'A',
    type: ChordType.minor,
    romanNumeral: 'vi'
  },
  {
    note: 'B',
    type: ChordType.diminished,
    romanNumeral: 'vii'
  }
];

export const cIonianSimilarModes = [
  {
    noteDisplayName: 'D',
    note: 'd',
    mode: 'dorian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'E',
    note: 'e',
    mode: 'phrygian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'F',
    note: 'f',
    mode: 'lydian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'G',
    note: 'g',
    mode: 'mixolydian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'A',
    note: 'a',
    mode: 'aeolian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'B',
    note: 'b',
    mode: 'locrian',
    noteExtender: 'natural'
  }
];

export const cLydianSimilarModes = [
  {
    noteDisplayName: 'D',
    note: 'd',
    mode: 'mixolydian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'E',
    note: 'e',
    mode: 'aeolian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'F',
    note: 'f',
    mode: 'locrian',
    noteExtender: 'sharp'
  },
  {
    noteDisplayName: 'G',
    note: 'g',
    mode: 'ionian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'A',
    note: 'a',
    mode: 'dorian',
    noteExtender: 'natural'
  },
  {
    noteDisplayName: 'B',
    note: 'b',
    mode: 'phrygian',
    noteExtender: 'natural'
  }
];
