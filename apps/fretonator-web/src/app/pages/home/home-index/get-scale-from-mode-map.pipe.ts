import { Pipe, PipeTransform } from '@angular/core';
import { Mode, NoteObject, Scale } from '../../../util/types';
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service';

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
