import { Pipe, PipeTransform } from '@angular/core';
import { NoteSymbol } from '../../../util/types';

@Pipe({
  name: 'stringToNoteSymbol',
})
export class StringToNoteSymbolPipe implements PipeTransform {

  transform(value: string): NoteSymbol | false {
    Object.keys(NoteSymbol).forEach((value): NoteSymbol => {
      const item = NoteSymbol[value];
      if (item === value) {
       return item
      }
    });

    return false
  }
}
