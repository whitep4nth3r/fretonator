import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { Mode, NoteObject, Scale } from '../../../util/types';

@Pipe({
  name: 'getScaleFromModeMap',
})
export class GetScaleFromModeMapPipe implements PipeTransform {
  constructor(private generateFretMapService: GenerateFretMapService) {
  }

  transform(note: NoteObject, mode: Mode): Scale {
    const modeMap = this.generateFretMapService.generateMode(note, mode);
    return modeMap.map(thisNote => this.generateFretMapService.convertNoteObjectToHumanReadable(thisNote));
  }
}
