import { TestBed } from '@angular/core/testing';

import {
  aFlatPhrygian,
  aMajorPentatonic,
  aMinorPentatonic,
  aSharpMajor,
  aSharpPentatonicMajor,
  bFlatLocrian,
  bFlatPhrygian,
  cHarmonicMinor,
  cIonianChordMap,
  cIonianFretMappings,
  cIonianMode,
  cMajorPentatonicChordMap,
  cMinorPentatonicChordMap,
  cPhrygianMode,
  dDorianMode,
  dFlatMajorPentatonic,
  dHarmonicMinor,
  dIonianFretMappings,
  eFlatMajorPentatonic,
  eFlatMinorPentatonic,
  fMinorPentatonic,
  fSharpHarmonicMinor,
  fSharpMajorPentatonic,
  gFlatMinorPentatonic
} from './fret-map.service.testConstants';

import { JamTracksData } from '../../data/jamTracks';

import { FretMapService } from './fret-map.service';
import { NoteSymbol, NoteExtenderString, Mode } from '../../util/types';

describe('GenerateFretMapService', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('GenerateFretMapService:generateNextNote - semitones', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns a semitone higher when all sharps and flats are false', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'd',
      sharp: false,
      flat: true,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a c flat when the current note is a b flat', () => {
    const result = service.generateNextNote(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'c',
      sharp: false,
      flat: true,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is an a sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'a',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'b',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is a d', () => {
    const result = service.generateNextNote(
      {
        name: 'd',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'e',
      sharp: false,
      flat: true,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is an e', () => {
    const result = service.generateNextNote(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'f',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is an b', () => {
    const result = service.generateNextNote(
      {
        name: 'b',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'c',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is an b', () => {
    const result = service.generateNextNote(
      {
        name: 'b',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'c',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is a b sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'b',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'c',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is an e sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'e',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      1
    );
    expect(result).toEqual({
      name: 'f',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a semitone higher when the current note is a d double sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'd',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: true
      },
      1
    );
    expect(result).toEqual({
      name: 'e',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });
});

describe('GenerateFretMapService:generateNextNote - tones', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns a tone higher when all sharps and flats are false', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      2
    );
    expect(result).toEqual({
      name: 'd',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a tone higher when the current note is an e', () => {
    const result = service.generateNextNote(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      2
    );
    expect(result).toEqual({
      name: 'f',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a tone higher when the current note is a c sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      2
    );
    expect(result).toEqual({
      name: 'd',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a tone higher when the current note is a c flat', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      2
    );
    expect(result).toEqual({
      name: 'd',
      sharp: false,
      flat: true,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns a tone higher when the current note is a c double sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: true
      },
      2
    );
    expect(result).toEqual({
      name: 'd',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: true
    });
  });
});

describe('GenerateFretMapService:generateNextNote - aug 2nds', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns an aug 2nd higher when the current note is c', () => {
    const result = service.generateNextNote(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      3
    );
    expect(result).toEqual({
      name: 'd',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns an aug 2nd higher when the current note is b flat', () => {
    const result = service.generateNextNote(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      3
    );
    expect(result).toEqual({
      name: 'c',
      sharp: true,
      flat: false,
      doubleFlat: false,
      doubleSharp: false
    });
  });

  it('returns an aug 2nd higher when the current note is f sharp', () => {
    const result = service.generateNextNote(
      {
        name: 'f',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      3
    );
    expect(result).toEqual({
      name: 'g',
      sharp: false,
      flat: false,
      doubleFlat: false,
      doubleSharp: true
    });
  });
});

describe('GenerateFretMapService:isNatural', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns true for an e natural', () => {
    const result = service.isNatural(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(true);
  });

  it('returns false for a b flat', () => {
    const result = service.isNatural(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });
});

describe('GenerateFretMapService:isSharp', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns false for an e natural', () => {
    const result = service.isSharp(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns false for e flat', () => {
    const result = service.isSharp(
      {
        name: 'e',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns false for e double flat', () => {
    const result = service.isSharp(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: true,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns false for e double sharp', () => {
    const result = service.isSharp(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: true
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns true for a c sharp', () => {
    const result = service.isSharp(
      {
        name: 'c',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'c'
    );
    expect(result).toBe(true);
  });
});

describe('GenerateFretMapService:isFlat', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns false for an e natural', () => {
    const result = service.isFlat(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns true for a b flat', () => {
    const result = service.isFlat(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'b'
    );
    expect(result).toBe(true);
  });
});

describe('GenerateFretMapService:isDoubleSharp', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns false for an e natural', () => {
    const result = service.isDoubleSharp(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns true for a c double sharp', () => {
    const result = service.isDoubleSharp(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: true
      },
      'c'
    );
    expect(result).toBe(true);
  });
});

describe('GenerateFretMapService:isDoubleFlat', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns false for an e natural', () => {
    const result = service.isDoubleFlat(
      {
        name: 'e',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'e'
    );
    expect(result).toBe(false);
  });

  it('returns true for a b double flat', () => {
    const result = service.isDoubleFlat(
      {
        name: 'b',
        sharp: false,
        flat: false,
        doubleFlat: true,
        doubleSharp: false
      },
      'b'
    );
    expect(result).toBe(true);
  });
});

describe('GenerateFretMapService:generateMode', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns the G flat Pentatonic Minor', () => {
    const result = service.generateMode(
      {
        name: 'g',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'minorPentatonic'
    );

    expect(result).toEqual(gFlatMinorPentatonic);
  });

  it('returns the A Pentatonic Minor', () => {
    const result = service.generateMode(
      {
        name: 'a',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'minorPentatonic'
    );

    expect(result).toEqual(aMinorPentatonic);
  });

  it('returns the A Pentatonic Major', () => {
    const result = service.generateMode(
      {
        name: 'a',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(aMajorPentatonic);
  });

  it('returns the E Flat Pentatonic Minor', () => {
    const result = service.generateMode(
      {
        name: 'e',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'minorPentatonic'
    );

    expect(result).toEqual(eFlatMinorPentatonic);
  });

  it('returns the E Flat Pentatonic Major', () => {
    const result = service.generateMode(
      {
        name: 'e',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(eFlatMajorPentatonic);
  });

  it('returns the F Sharp Pentatonic Major', () => {
    const result = service.generateMode(
      {
        name: 'f',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(fSharpMajorPentatonic);
  });

  it('returns the F Pentatonic Minor', () => {
    const result = service.generateMode(
      {
        name: 'f',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'minorPentatonic'
    );

    expect(result).toEqual(fMinorPentatonic);
  });

  it('returns the D flat Pentatonic Major', () => {
    const result = service.generateMode(
      {
        name: 'd',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(dFlatMajorPentatonic);
  });

  it('returns the A sharp Pentatonic Major', () => {
    const result = service.generateMode(
      {
        name: 'a',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(aSharpPentatonicMajor);
  });

  it('returns the C ionian mode', () => {
    const result = service.generateMode(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'ionian'
    );
    expect(result).toEqual(cIonianMode);
  });

  it('returns the D dorian mode', () => {
    const result = service.generateMode(
      {
        name: 'd',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'dorian'
    );
    expect(result).toEqual(dDorianMode);
  });

  it('returns the C phrygian mode', () => {
    const result = service.generateMode(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'phrygian'
    );
    expect(result).toEqual(cPhrygianMode);
  });

  it('returns the B flat phrygian mode', () => {
    const result = service.generateMode(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'phrygian'
    );
    expect(result).toEqual(bFlatPhrygian);
  });

  it('returns the A flat phrygian mode', () => {
    const result = service.generateMode(
      {
        name: 'a',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'phrygian'
    );
    expect(result).toEqual(aFlatPhrygian);
  });

  it('returns the D harmonic minor', () => {
    const result = service.generateMode(
      {
        name: 'd',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'harmonicMinor'
    );
    expect(result).toEqual(dHarmonicMinor);
  });

  it('returns the C harmonic minor', () => {
    const result = service.generateMode(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'harmonicMinor'
    );
    expect(result).toEqual(cHarmonicMinor);
  });

  it('returns the B flat locrian mode', () => {
    const result = service.generateMode(
      {
        name: 'b',
        sharp: false,
        flat: true,
        doubleFlat: false,
        doubleSharp: false
      },
      'locrian'
    );
    expect(result).toEqual(bFlatLocrian);
  });

  it('returns the f sharp harmonic minor', () => {
    const result = service.generateMode(
      {
        name: 'f',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'harmonicMinor'
    );
    expect(result).toEqual(fSharpHarmonicMinor);
  });

  it('returns the a sharp ionian mode', () => {
    const result = service.generateMode(
      {
        name: 'a',
        sharp: true,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'ionian'
    );
    expect(result).toEqual(aSharpMajor);
  });
});

describe('GenerateFretMapService:convertNoteObjectToHumanReadable', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns D for a d natural object', () => {
    const result = service.convertNoteObjectToHumanReadable({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('D');
  });

  it('returns D# for a d sharp object', () => {
    const result = service.convertNoteObjectToHumanReadable({
      name: 'd',
      sharp: true,
      flat: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('D#');
  });

  it('returns D♭ for a d flat object', () => {
    const result = service.convertNoteObjectToHumanReadable({
      name: 'd',
      sharp: false,
      flat: true,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('D♭');
  });

  it('returns Dx for a d double sharp object', () => {
    const result = service.convertNoteObjectToHumanReadable({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: true,
      doubleFlat: false
    });

    expect(result).toBe('Dx');
  });

  it('returns D♭♭ for a d double flat object', () => {
    const result = service.convertNoteObjectToHumanReadable({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: false,
      doubleFlat: true
    });

    expect(result).toBe('D𝄫');
  });
});

describe('GenerateFretMapService:convertNoteToFretMapKey', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns d for a d natural object', () => {
    const result = service.convertNoteToFretMapKey({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('d');
  });

  it('returns d# for a d sharp object', () => {
    const result = service.convertNoteToFretMapKey({
      name: 'd',
      sharp: true,
      flat: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('d#');
  });

  it('returns d_ for a d flat object', () => {
    const result = service.convertNoteToFretMapKey({
      name: 'd',
      sharp: false,
      flat: true,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe('d_');
  });

  it('returns d## for a d double sharp object', () => {
    const result = service.convertNoteToFretMapKey({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: true,
      doubleFlat: false
    });

    expect(result).toBe('d##');
  });

  it('returns d__ for a d double flat object', () => {
    const result = service.convertNoteToFretMapKey({
      name: 'd',
      sharp: false,
      flat: false,
      doubleSharp: false,
      doubleFlat: true
    });

    expect(result).toBe('d__');
  });
});

describe('GenerateFretMapService:getFretMapping', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns the correct fret mappings for C ionian', () => {
    const result = service.getFretMapping(
      {
        name: 'c',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'ionian'
    );

    expect(result).toEqual(cIonianFretMappings);
  });

  it('returns the correct fret mappings for D ionian', () => {
    const result = service.getFretMapping(
      {
        name: 'd',
        sharp: false,
        flat: false,
        doubleFlat: false,
        doubleSharp: false
      },
      'ionian'
    );

    expect(result).toEqual(dIonianFretMappings);
  });
});

describe('GenerateFretMapService:convertNoteObjectToNoteSymbol', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns the correct note symbol for A sharp', () => {
    const result = service.convertNoteObjectToNoteSymbol({
      name: 'a',
      flat: false,
      sharp: true,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe(NoteSymbol.aSharp);
  });

  it('returns the correct note symbol for A flat', () => {
    const result = service.convertNoteObjectToNoteSymbol({
      name: 'a',
      flat: true,
      sharp: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe(NoteSymbol.aFlat);
  });

  it('returns false if it cannot find the note symbol', () => {
    const result = service.convertNoteObjectToNoteSymbol({
      name: 'aaaaa',
      flat: true,
      sharp: false,
      doubleSharp: false,
      doubleFlat: false
    });

    expect(result).toBe(false);
  });
});

describe('GenerateFretMapService:getJamTrack', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns a Jam track for c ionian', () => {
    const result = service.getJamTrack(
      {
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'ionian'
    );

    expect(result).toEqual(JamTracksData[0]);
  });

  it('returns a Jam track for c pentatonic major', () => {
    const result = service.getJamTrack(
      {
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'majorPentatonic'
    );

    expect(result).toEqual(JamTracksData[0]);
  });

  it('returns a Jam track for c pentatonic minor', () => {
    const result = service.getJamTrack(
      {
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'minorPentatonic'
    );

    expect(result).toEqual(JamTracksData[5]);
  });

  it('returns false if there is no jam track', () => {
    const result = service.getJamTrack(
      {
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'unknownMode'
    );

    expect(result).toEqual(false);
  });
});

describe('GenerateFretMapService:getChords', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns the correct pattern for ionian', () => {
    const result = service.getChordMap({
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'ionian');

    expect(result).toStrictEqual(cIonianChordMap);
  });

  it('returns the correct pattern for c minor pentatonic', () => {
    const result = service.getChordMap({
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'minorPentatonic');

    expect(result).toStrictEqual(cMinorPentatonicChordMap);
  });

  it('returns the correct pattern for c major pentatonic', () => {
    const result = service.getChordMap({
        name: 'c',
        flat: false,
        sharp: false,
        doubleSharp: false,
        doubleFlat: false
      },
      'majorPentatonic');

    expect(result).toStrictEqual(cMajorPentatonicChordMap);
  });
});

describe('GenerateFretMapService:getNextOctaveNote', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns an a for interval 4 and noteName f', () => {
    const result = service.getNextOctaveNote('f', 4);
    expect(result).toBe('a');
  });

  it('returns a b for interval 4 and noteName g', () => {
    const result = service.getNextOctaveNote('g', 4);
    expect(result).toBe('b');
  });

  it('returns a c for interval 4 and noteName a', () => {
    const result = service.getNextOctaveNote('a', 4);
    expect(result).toBe('c');
  });

  it('returns an a for interval 3 and noteName g', () => {
    const result = service.getNextOctaveNote('g', 3);
    expect(result).toBe('a');
  });

  it('returns a d for interval 2 and noteName c', () => {
    const result = service.getNextOctaveNote('c', 2);
    expect(result).toBe('d');
  });
});

describe('GenerateFretMapService:convertFretMapConfigurationToDisplayString', () => {
  let service: FretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
  });

  it('returns C Ionian (Major)', () => {
    const result = service.convertFretMapConfigurationToDisplayString(
      'c',
      NoteExtenderString.natural,
      Mode.ionian
    );
    expect(result).toBe('C Ionian (Major)');
  });

  it('returns D sharp Aolian (Minor)', () => {
    const result = service.convertFretMapConfigurationToDisplayString(
      'd',
      NoteExtenderString.sharp,
      Mode.aolian
    );
    expect(result).toBe('D sharp Aolian (Minor)');
  });

  it('returns A flat Minor Pentatonic', () => {
    const result = service.convertFretMapConfigurationToDisplayString(
      'a',
      NoteExtenderString.flat,
      Mode.minorPentatonic
    );
    expect(result).toBe('A flat Minor Pentatonic');
  });
});
