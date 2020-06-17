import { Pipe, PipeTransform } from '@angular/core';
import { ModeMap } from '../../util/types';

@Pipe({
  name: 'isTheoreticalScale'
})
export class IsTheoreticalScalePipe implements PipeTransform {

  transform(modeMap: ModeMap): boolean {
    for (const note of modeMap) {
      if(note.displayName.indexOf('x') !== -1 || note.displayName.indexOf('𝄫') !== -1) {
        return true;
      }
    }
    return false;
  }
}
