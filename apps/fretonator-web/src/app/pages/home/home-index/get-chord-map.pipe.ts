import { Pipe, PipeTransform } from '@angular/core';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { ChordMap, Mode, NoteObject } from '../../../util/types';

@Pipe({
  name: 'getChordMap'
})
export class GetChordMapPipe implements PipeTransform {

  constructor(public generateFretMapService: FretMapService) {
  }

  transform(noteObject: NoteObject, mode: Mode): ChordMap {
    return this.generateFretMapService.getChordMap(noteObject, mode);
  }

}
