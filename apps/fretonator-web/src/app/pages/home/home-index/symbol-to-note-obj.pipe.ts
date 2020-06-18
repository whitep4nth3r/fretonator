import { Pipe, PipeTransform } from '@angular/core';
import { NoteObject } from '../../../util/types';
import { FretMapService } from '../../../common/fret-map/fret-map.service';

@Pipe({
  name: 'symbolToNoteObj'
})
export class SymbolToNoteObjPipe implements PipeTransform {
  constructor(public fretMapService: FretMapService) {
  }

  transform(note: string, noteExtender: string): NoteObject {
    return this.fretMapService.convertSymbolToNoteObject(note, noteExtender);
  }
}
