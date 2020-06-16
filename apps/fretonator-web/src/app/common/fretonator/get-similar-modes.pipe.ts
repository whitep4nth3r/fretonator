import { Pipe, PipeTransform } from '@angular/core';
import { FretMapService } from '../fret-map/fret-map.service';
import { Mode, ModeMap, SimilarModes } from '../../util/types';

@Pipe({
  name: 'getSimilarModes'
})
export class GetSimilarModesPipe implements PipeTransform {

  constructor(public generateFretMapService: FretMapService) {}

  transform(modeMap: ModeMap, mode: Mode): SimilarModes {
    return this.generateFretMapService.getSimilarModes(modeMap, mode);
  }

}
