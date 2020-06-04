import { Pipe, PipeTransform } from '@angular/core';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { JamTrack, Mode, NoteObject } from '../../../util/types';

@Pipe({
  name: 'getJamTrack',
})
export class GetJamTrackPipe implements PipeTransform {
  constructor(public generateFretMapService: FretMapService) {}

  transform(note: NoteObject, mode: Mode): JamTrack | false {
    return this.generateFretMapService.getJamTrack(note, mode);
  }
}
