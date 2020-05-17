import { Pipe, PipeTransform } from '@angular/core';
import { fretMap } from './fretonator.component';

@Pipe({
  name: 'getNoteFromMap',
})
export class GetNoteFromMapPipe implements PipeTransform {
  transform(fretMap: fretMap, string: string, fret: number): string | false {
    const found = fretMap.find((thisFret) => thisFret.fret === fret && thisFret.string === string);

    console.log(found);

    return found ? found.displayName : false;
  }
}
