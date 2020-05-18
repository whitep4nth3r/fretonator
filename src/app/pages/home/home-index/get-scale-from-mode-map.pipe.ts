import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { Scale, NoteObject, Mode } from '../../../util/types';

@Pipe({
  name: 'getScaleFromModeMap',
})
export class GetScaleFromModeMapPipe implements PipeTransform {
  constructor(private generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): Scale {
    const modeMap = this.generateFretMapService.generateMode(note, mode);
    const returnScale: Scale = [];
    for (let note of modeMap) {
      returnScale.push(
        this.generateFretMapService.convertNoteObjectToHumanReadable(note)
      );
    }

    return returnScale;
  }
}
