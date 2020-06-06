import { Pipe, PipeTransform } from '@angular/core';
import { Scale } from '../../util/types';

@Pipe({
  name: 'isTheoreticalScale'
})
export class IsTheoreticalScalePipe implements PipeTransform {

  transform(scale: Scale): boolean {
    for (const note of scale) {
      if(note.indexOf('x') !== -1 || note.indexOf('𝄫') !== -1) {
        return true;
      }
    }
    return false;
  }
}
