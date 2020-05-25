import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service';
import { ChordMap, Mode, NoteObject } from '../../../util/types';

@Pipe({
  name: 'getChordMap'
})
export class GetChordMapPipe implements PipeTransform {

  constructor(public generateFretMapService: GenerateFretMapService) {
  }

  transform(noteObject: NoteObject, mode: Mode): ChordMap {
    return this.generateFretMapService.getChordMap(noteObject, mode);
  }

}
