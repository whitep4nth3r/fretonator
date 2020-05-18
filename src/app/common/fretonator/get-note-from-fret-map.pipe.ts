import { Pipe, PipeTransform } from '@angular/core';
import { FretMap } from '../../util/types';

@Pipe({
  name: 'getNoteFromFretMap',
})
export class GetNoteFromFretMapPipe implements PipeTransform {
  transform(fretMap: FretMap, string: string, fret: number): string | false {
    const found = fretMap.find(
      (thisFret) => thisFret.fret === fret && thisFret.string === string
    );

    return found ? found.displayName : false;
  }
}
