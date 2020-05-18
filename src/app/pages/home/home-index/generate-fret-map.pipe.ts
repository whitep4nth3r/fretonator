import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { NoteObject, Mode, FretMap } from '../../../util/types';

@Pipe({
  name: 'generateFretMap',
})
export class GenerateFretMapPipe implements PipeTransform {
  constructor(private generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): FretMap {
    return this.generateFretMapService.getFretMapping(note, mode);
  }
}
