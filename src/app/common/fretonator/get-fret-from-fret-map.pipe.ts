import {Pipe, PipeTransform} from '@angular/core';
import {Fret, FretMap} from '../../util/types';

@Pipe({
  name: 'getFretFromFretMap',
})
export class GetFretFromFretMapPipe implements PipeTransform {
  transform(fretMap: FretMap, stringName: string, fret: number): Fret | false {
    const found = fretMap
      .find((thisFret) => thisFret.fret === fret && thisFret.string === stringName);

    return found ? found : false;
  }
}
