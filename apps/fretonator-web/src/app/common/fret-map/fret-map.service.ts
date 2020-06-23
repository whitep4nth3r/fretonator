import { Injectable } from '@angular/core';
import {
  ChordMap,
  Fret,
  FretMap,
  JamTrack,
  Mode,
  ModeMap,
  NoteExtenderString,
  NoteObject,
  NoteSymbol,
  SimilarModes
} from '../../util/types';
import {
  ChordPatterns,
  ModePatterns,
  ModeSelectorObjects,
  NoteToStringAndFretMap,
  Octave,
  ScaleDegrees,
  StandardModePatterns
} from '../../util/constants';
import { JamTracksData } from '../../data/jamTracks';

@Injectable({
  providedIn: 'root'
})
export class FretMapService {
  constructor() {
  }

  isNatural = (note: NoteObject, noteName: string): boolean => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isSharp = (note: NoteObject, noteName: string): boolean => {
    return (
      note.name === noteName &&
      note.sharp === true &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isFlat = (note: NoteObject, noteName: string): boolean => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === true &&
      note.doubleFlat === false &&
      note.doubleSharp === false
    );
  };

  isDoubleFlat = (note: NoteObject, noteName: string): boolean => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === true &&
      note.doubleSharp === false
    );
  };

  isDoubleSharp = (note: NoteObject, noteName: string): boolean => {
    return (
      note.name === noteName &&
      note.sharp === false &&
      note.flat === false &&
      note.doubleFlat === false &&
      note.doubleSharp === true
    );
  };

  getNextOctaveNote = (noteName: string, interval: number): string => {
    if (interval === 4) {
      if (noteName === 'f') {
        return 'a';
      } else if (noteName === 'g') {
        return 'b';
      } else {
        return Octave[Octave.indexOf(noteName) + 2];
      }
    } else {
      return noteName === 'g'
        ? 'a'
        : Octave[Octave.indexOf(noteName) + 1];
    }
  };

  generateNextNote = (currentNote: NoteObject, interval: number): NoteObject => {
    const nextNote = {
      name: this.getNextOctaveNote(currentNote.name, interval),
      flat: false,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false
    };

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
        if (this.isFlat(currentNote, 'e') || this.isFlat(currentNote, 'b')) {
          nextNote.sharp = true;
          return nextNote;
        }

        if (this.isFlat(currentNote, currentNote.name)) {
          return nextNote;
        }

        if (this.isNatural(currentNote, currentNote.name)) {
          nextNote.sharp = true;
          return nextNote;
        }

        if (this.isSharp(currentNote, currentNote.name)) {
          nextNote.doubleSharp = true;
          return nextNote;
        }

        break;
      case 4:
        if (this.isNatural(currentNote, 'd')
          || this.isNatural(currentNote, 'a')
          || this.isNatural(currentNote, 'e')
          || this.isNatural(currentNote, 'b')) {
          return nextNote;
        }

        if (this.isNatural(currentNote, currentNote.name)) {
          nextNote.flat = true;
          return nextNote;
        }

        if (this.isSharp(currentNote, 'e')
          || this.isSharp(currentNote, 'b')
          || this.isSharp(currentNote, 'a')
          || this.isSharp(currentNote, 'd')) {
          nextNote.sharp = true;
          return nextNote;
        }

        if (this.isSharp(currentNote, currentNote.name)) {
          return nextNote;
        }

        if (this.isFlat(currentNote, 'g')) {
          nextNote.doubleFlat = true;
          return nextNote;
        }

        if (this.isFlat(currentNote, currentNote.name)) {
          nextNote.flat = true;
          return nextNote;
        }

        if (this.isDoubleSharp(currentNote, currentNote.name)) {
          nextNote.sharp = true;
          return nextNote;
        }
        break;
      default:
        throw new Error('Unmapped interval provided!');
    }

    return nextNote;
  };

  generateMode = (startingNote: NoteObject, mode: string): ModeMap => {
    let currentNote = {
      ...startingNote,
      displayName: this.convertNoteObjectToHumanReadable(startingNote)
    };

    const newMode: ModeMap = [];
    newMode.push(currentNote);

    let newNote;

    const modePattern = ModePatterns[mode];

    for (let i = 0; i < modePattern.length - 1; i++) {
      newNote = this.generateNextNote(currentNote, modePattern[i]);
      newNote.displayName = this.convertNoteObjectToHumanReadable(newNote);

      newMode.push(newNote);
      currentNote = newNote;
    }

    return newMode;
  };

  convertNoteObjectToHumanReadable = (note: NoteObject): string => {
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

  convertFretMapConfigurationToDisplayString = (
    note: string,
    noteExtender: NoteExtenderString,
    mode: Mode
  ): string => {
    const returnNote = note.toUpperCase();
    const returnExtender = noteExtender === 'natural' ? '' : ' ' + noteExtender;

    const modeSelectorObj = ModeSelectorObjects.filter(
      (item) => item.name === mode
    );

    const returnMode = modeSelectorObj[0].displayName;

    return returnNote + returnExtender + ' ' + returnMode;
  };

  getFretMapping(startingNote: NoteObject, mode: string): FretMap {
    const origModeMap = this.generateMode(startingNote, mode);

    const modeMap = origModeMap.map((noteObject, index) => ({
      ...noteObject,
      degree: ScaleDegrees[index]
    }));

    return modeMap
      .map((note) =>
        NoteToStringAndFretMap[this.convertNoteToFretMapKey(note)]
          .map((thisNote: NoteObject) => ({
            ...thisNote,
            displayName: note.displayName,
            degree: note.degree
          })))
      .flat()
      .reduce((acc, curr) => [...acc, curr], [])
      .filter((item) => !!item)
      .sort(this.sortFretMapping);

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

  convertSymbolToNoteObject = (note: string, noteExtender: string): NoteObject => {
    return {
      name: note,
      flat: noteExtender === '_',
      sharp: noteExtender === '#',
      doubleFlat: false,
      doubleSharp: false
    };
  }

  convertNoteObjectToNoteSymbol = (noteObject: NoteObject): NoteSymbol | false => {
    let suffix = '';

    if (this.isSharp(noteObject, noteObject.name)) {
      suffix = '#';
    }

    if (this.isFlat(noteObject, noteObject.name)) {
      suffix = '_';
    }

    let returnSymbol: NoteSymbol;

    Object.keys(NoteSymbol).forEach((symbol) => {
      const item = NoteSymbol[symbol];
      if (item === noteObject.name + suffix) {
        returnSymbol = item;
      }
    });

    return returnSymbol ? returnSymbol : false;
  };

  getJamTrack = (startingNote: NoteObject, mode: string): JamTrack | false => {
    if (mode === Mode.majorPentatonic) {
      mode = Mode.ionian;
    }

    if (mode === Mode.minorPentatonic) {
      mode = Mode.aeolian;
    }

    const noteSymbol = this.convertNoteObjectToNoteSymbol(startingNote);

    const found = JamTracksData
      .find((thisTrack) => thisTrack.key === noteSymbol && thisTrack.mode === mode);

    return found ? found : false;
  };

  getChordMap = (startingNote: NoteObject, mode: string): ChordMap => {
    const origModeMap = this.generateMode(startingNote, mode);
    const chordPattern = ChordPatterns[mode];

    return origModeMap.map((noteObject, index) => ({
      note: this.convertNoteObjectToHumanReadable(noteObject),
      type: chordPattern[index]
    }));
  };

  getNoteExtenderStringFromNoteObject = (noteObject: NoteObject): NoteExtenderString => {
    if (this.isSharp(noteObject, noteObject.name)) {
      return NoteExtenderString.sharp;
    }

    if (this.isFlat(noteObject, noteObject.name)) {
      return NoteExtenderString.flat;
    }

    if (this.isNatural(noteObject, noteObject.name)) {
      return NoteExtenderString.natural;
    }
  };

  getStandardModesInOrder = (startModeIndex: number): Mode[] => {
    const before = [...StandardModePatterns];
    const after = before.splice(startModeIndex);

    return [
      ...after,
      ...before
    ];
  };

  getSimilarModes = (modeMap: ModeMap, inputMode: Mode): SimilarModes => {
    const firstModeInPattern = StandardModePatterns.indexOf(inputMode);

    if (firstModeInPattern === -1) {
      return [];
    }

    const nextModes = this.getStandardModesInOrder(firstModeInPattern);

    const similarModes = modeMap
      .map((noteObject, index) => (
        {
          noteDisplayName: noteObject.displayName,
          note: noteObject.name,
          mode: nextModes[index],
          noteExtender: this.getNoteExtenderStringFromNoteObject(noteObject)
        }
      ));

    similarModes.shift();
    return similarModes;
  };
}
