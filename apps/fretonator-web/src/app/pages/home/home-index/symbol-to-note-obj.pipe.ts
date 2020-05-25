import { Pipe, PipeTransform } from '@angular/core';
import { NoteObject } from '../../../util/types';

@Pipe({
  name: 'symbolToNoteObj',
})
export class SymbolToNoteObjPipe implements PipeTransform {
  transform(note: string, noteExtender: string): NoteObject {
    return {
      name: note,
      flat: noteExtender === '_',
      sharp: noteExtender === '#',
      doubleFlat: false,
      doubleSharp: false,
    };
  }
}
