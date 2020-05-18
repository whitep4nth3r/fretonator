import { Pipe, PipeTransform } from '@angular/core';
import { NoteObject, NoteSymbol } from '../../../util/types';

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
