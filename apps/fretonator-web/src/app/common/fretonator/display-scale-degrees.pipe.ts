import { Pipe, PipeTransform } from '@angular/core';
import { Mode } from '../../util/types';

@Pipe({
  name: 'displayScaleDegrees'
})
export class DisplayScaleDegreesPipe implements PipeTransform {

  transform(mode: Mode): boolean {
    return (!(mode === Mode.majorPentatonic || mode === Mode.minorPentatonic));
  }
}
