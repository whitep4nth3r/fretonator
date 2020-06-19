import { Pipe, PipeTransform } from '@angular/core';
import { Mode, ModeMap, NoteObject } from '../../../util/types';
import { FretMapService } from '../../../common/fret-map/fret-map.service';

@Pipe({
  name: 'generateModeMap'
})
export class GenerateModeMapPipe implements PipeTransform {
  constructor(public generateFretMapService: FretMapService) {
  }

  transform(note: NoteObject, mode: Mode): ModeMap {
    return this.generateFretMapService.generateMode(note, mode);
  }

}
