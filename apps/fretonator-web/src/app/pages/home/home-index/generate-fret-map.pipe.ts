import { Pipe, PipeTransform } from '@angular/core';
import { FretMap, Mode, NoteObject } from '../../../util/types';
import { FretMapService } from '../../../common/fret-map/fret-map.service';

@Pipe({
  name: 'generateFretMap',
})
export class GenerateFretMapPipe implements PipeTransform {
  constructor(public generateFretMapService: FretMapService) {}

  transform(note: NoteObject, mode: Mode): FretMap {
    return this.generateFretMapService.getFretMapping(note, mode);
  }
}
