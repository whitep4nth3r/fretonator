import { Injectable } from '@angular/core';
import { NoteObject } from '../../pages/home/home-home/symbol-to-note-obj.pipe';
import { fret } from '../fretonator/fretonator.component';

const noteToStringAndFretMap = {
  c__: [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 },
  ],
  c_: [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
  ],
  c: [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 },
  ],
  'c#': [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 },
  ],
  'c##': [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 },
  ],
  d__: [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 },
  ],
  d_: [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 },
  ],
  d: [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 },
  ],
  'd#': [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 },
  ],
  'd##': [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 },
  ],
  e__: [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 },
  ],
  e_: [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 },
  ],
  e: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 },
  ],
  'e#': [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 },
  ],
  'e##': [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 },
  ],
  f__: [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 },
  ],
  f_: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 },
  ],
  f: [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 },
  ],
  'f#': [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 },
  ],
  'f##': [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 },
  ],
  g__: [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 },
  ],
  g_: [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 },
  ],
  g: [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 },
  ],
  'g#': [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 11 },
    { string: 'D', fret: 6 },
    { string: 'G', fret: 1 },
    { string: 'B', fret: 9 },
  ],
  'g##': [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 },
  ],
  a__: [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 },
  ],
  a_: [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 11 },
    { string: 'D', fret: 6 },
    { string: 'G', fret: 1 },
    { string: 'B', fret: 9 },
  ],
  a: [
    { string: 'E', fret: 5 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 },
  ],
  'a#': [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 },
  ],
  'a##': [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
  ],
  b__: [
    { string: 'E', fret: 5 },
    { string: 'A', fret: 0 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 },
  ],
  b_: [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 },
  ],
  b: [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
  ],
  'b#': [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 },
  ],
  'b##': [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 },
  ],
};

const modePatterns = {
  ionian: [2, 2, 1, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  aolian: [2, 1, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
};

const octave = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

@Injectable({
  providedIn: 'root',
})
export class GenerateFretMapService {
  constructor() {}

  isNatural = (note: NoteObject, noteName: string) => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isSharp = (note: NoteObject, noteName: string) => {
    return (
      note.name === noteName &&
      note.sharp === true &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isFlat = (note: NoteObject, noteName: string) => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === true &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isDoubleFlat = (note: NoteObject, noteName: string) => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === true &&
      note.doubleSharp === false
    );
  };

  isDoubleSharp = (note: NoteObject, noteName: string) => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === true
    );
  };

  generateNextNote = (currentNote: NoteObject, interval: number) => {
    const nextNote = {
      name: '',
      flat: false,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false,
    };

    nextNote.name = currentNote.name === 'g' ? 'a' : octave[octave.indexOf(currentNote.name) + 1];

    switch (interval) {
      case 1:
        if (this.isNatural(currentNote, 'b') || this.isNatural(currentNote, 'e')) {
          return nextNote;
        }

        if (this.isFlat(currentNote, 'b') || this.isFlat(currentNote, 'e')) {
          nextNote.flat = true;
          return nextNote;
        }

        if (this.isSharp(currentNote, 'b') || this.isSharp(currentNote, 'e')) {
          nextNote.sharp = true;
        }

        if (
          this.isNatural(currentNote, currentNote.name) ||
          this.isDoubleFlat(currentNote, currentNote.name)
        ) {
          nextNote.flat = true;
        }

        if (this.isFlat(currentNote, currentNote.name)) {
          nextNote.doubleFlat = true;
        }

        if (this.isDoubleSharp(currentNote, currentNote.name)) {
          nextNote.sharp = true;
        }

        if (this.isSharp(currentNote, currentNote.name)) {
          return nextNote;
        }
        break;
      case 2:
        if (this.isNatural(currentNote, 'b') || this.isNatural(currentNote, 'e')) {
          nextNote.sharp = true;
          return nextNote;
        }

        if (this.isFlat(currentNote, 'e') || this.isFlat(currentNote, 'b')) {
          return nextNote;
        }

        if (this.isSharp(currentNote, 'e') || this.isSharp(currentNote, 'b')) {
          nextNote.doubleSharp = true;
          return nextNote;
        }

        if (this.isSharp(currentNote, currentNote.name)) {
          nextNote.sharp = true;
          return nextNote;
        }

        if (this.isDoubleSharp(currentNote, currentNote.name)) {
          nextNote.doubleSharp = true;
        }

        if (
          this.isFlat(currentNote, currentNote.name) ||
          this.isDoubleFlat(currentNote, currentNote.name)
        ) {
          nextNote.flat = true;
          return nextNote;
        }
        break;
      case 3:
        if (
          this.isNatural(currentNote, currentNote.name) ||
          this.isFlat(currentNote, currentNote.name)
        ) {
          nextNote.sharp = true;
          return nextNote;
        }
        break;
      default:
        throw new Error('No interval provided!');
    }

    return nextNote;
  };

  generateMode = (startingNote: NoteObject, mode: string) => {
    let currentNote = startingNote;
    let newNote;

    const newMode = [];
    newMode.push(currentNote);

    const modePattern = modePatterns[mode];

    for (let i = 0; i < modePattern.length - 1; i++) {
      newNote = this.generateNextNote(currentNote, modePattern[i]);
      newMode.push(newNote);
      currentNote = newNote;
    }

    return newMode;
  };

  convertNoteObjectToHumanReadable = (note: NoteObject) => {
    if (note.sharp) {
      return note.name.toUpperCase() + '#';
    }

    if (note.flat) {
      return note.name.toUpperCase() + '♭';
    }

    if (note.doubleSharp) {
      return note.name.toUpperCase() + 'x';
    }

    if (note.doubleFlat) {
      return note.name.toUpperCase() + '♭♭';
    }

    return note.name.toUpperCase();
  };

  convertNoteToFretMapKey = (note: NoteObject) => {
    if (note.sharp) {
      return note.name + '#';
    }

    if (note.flat) {
      return note.name + '_';
    }

    if (note.doubleSharp) {
      return note.name + '##';
    }

    if (note.doubleFlat) {
      return note.name + '__';
    }

    return note.name;
  };

  getFretMapping(startingNote: NoteObject, mode: string) {
    const modeMap = this.generateMode(startingNote, mode);

    modeMap.forEach((NoteObject) => {
      NoteObject.displayName = this.convertNoteObjectToHumanReadable(NoteObject);
    });

    const newFretMap = modeMap
      .map((note) => {
        const newNotes = noteToStringAndFretMap[this.convertNoteToFretMapKey(note)];

        newNotes.forEach((thisNote: NoteObject) => {
          thisNote.displayName = note.displayName;
        });

        return newNotes;
      })
      .flat()
      .reduce((acc, curr) => {
        return [...acc, curr];
      }, [])
      .filter((item) => !!item)
      .sort(this.sortFretMapping);

    return newFretMap;
  }

  sortFretMapping = (current: fret, next: fret) => {
    if (current.string < next.string) {
      return -1;
    }

    if (current.string === next.string) {
      if (current.fret < next.fret) {
        return -1;
      }
    }

    return 0;
  };
}
