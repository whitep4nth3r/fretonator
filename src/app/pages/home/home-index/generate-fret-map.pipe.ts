import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { FretMap, Mode, NoteObject } from '../../../util/types';

@Pipe({
  name: 'generateFretMap',
})
export class GenerateFretMapPipe implements PipeTransform {
  constructor(public generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): FretMap {
    return this.generateFretMapService.getFretMapping(note, mode);
  }
}
