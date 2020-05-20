import { Pipe, PipeTransform } from '@angular/core';
import { FretMap } from '../../util/types';

@Pipe({
  name: 'getScaleDegreeFromFretMap',
})
export class GetScaleDegreeFromFretMapPipe implements PipeTransform {
  transform(fretMap: FretMap, string: string, fret: number): unknown {
    const found = fretMap.find(
      (thisFret) => thisFret.fret === fret && thisFret.string === string
    );

    return found ? found.degree : false;
  }
}
