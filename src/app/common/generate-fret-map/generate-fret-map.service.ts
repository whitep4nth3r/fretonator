import { Injectable } from '@angular/core';
import { NoteObject, Fret, ModeMap } from '../../util/types';
import {
  Octave,
  ModePatterns,
  NoteToStringAndFretMap,
} from '../../util/constants';

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

    nextNote.name =
      currentNote.name === 'g'
        ? 'a'
        : Octave[Octave.indexOf(currentNote.name) + 1];

    switch (interval) {
      case 1:
        if (
          this.isNatural(currentNote, 'b') ||
          this.isNatural(currentNote, 'e')
        ) {
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
        if (
          this.isNatural(currentNote, 'b') ||
          this.isNatural(currentNote, 'e')
        ) {
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
        if (this.isNatural(currentNote, currentNote.name)) {
          //I removed the isFlat here to fix C harmonic minor - need to check the tests
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
    let newNote: NoteObject;

    const newMode: ModeMap = [];
    newMode.push(currentNote);

    const modePattern = ModePatterns[mode];

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
      return note.name.toUpperCase() + '𝄫';
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
      NoteObject.displayName = this.convertNoteObjectToHumanReadable(
        NoteObject
      );
    });

    const newFretMap = modeMap
      .map((note) => {
        const newNotes =
          NoteToStringAndFretMap[this.convertNoteToFretMapKey(note)];

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

  sortFretMapping = (current: Fret, next: Fret) => {
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
