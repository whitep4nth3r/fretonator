import { Pipe, PipeTransform } from '@angular/core';

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

@Pipe({
  name: 'symbolToNoteObj',
})
export class SymbolToNoteObjPipe implements PipeTransform {
  transform(note: NoteSymbol): NoteObject {
    return {
      name: note.charAt(0),
      flat: note.charAt(1) === '_',
      sharp: note.charAt(1) === '#',
      doubleFlat: false,
      doubleSharp: false,
    };
  }
}
