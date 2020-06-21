import { Pipe, PipeTransform } from '@angular/core';
import { Fret, FretMap } from '../../../util/types';

@Pipe({
  name: 'getFretFromFretMap'
})
export class GetFretFromFretMapPipe implements PipeTransform {
  transform(fretMap: FretMap, stringName: string, fret: number, caseSensitive = false): Fret | false {

    const found = fretMap
      .find((thisFret) => {

        const stringComparison = !caseSensitive ? thisFret.string.toUpperCase() : thisFret.string;
        const stringNameComparison = !caseSensitive ? stringName.toUpperCase() : stringName;

        return thisFret.fret === fret && stringComparison === stringNameComparison;
      });

    return found ? found : false;
  }
}
