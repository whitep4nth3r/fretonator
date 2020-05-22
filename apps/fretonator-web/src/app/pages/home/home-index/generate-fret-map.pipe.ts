import { Pipe, PipeTransform } from '@angular/core';
import { FretMap, Mode, NoteObject } from '../../../util/types';
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service';

@Pipe({
  name: 'generateFretMap',
})
export class GenerateFretMapPipe implements PipeTransform {
  constructor(public generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): FretMap {
    return this.generateFretMapService.getFretMapping(note, mode);
  }
}
