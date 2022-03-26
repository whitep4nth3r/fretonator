import { Pipe, PipeTransform } from '@angular/core';
import { Mode } from '../../../util/types';
import { ModePatterns } from '../../../util/constants';

@Pipe({
  name: 'getIntervalPatternFromMode'
})
export class GetIntervalPatternFromModePipe implements PipeTransform {
  transform(modeName: Mode): Array<number> {
    return ModePatterns[modeName];
  }
}
