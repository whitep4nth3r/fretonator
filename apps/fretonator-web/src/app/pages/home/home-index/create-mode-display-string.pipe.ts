import { Pipe, PipeTransform } from '@angular/core';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { Mode, NoteExtenderString } from '../../../util/types';

@Pipe({
  name: 'createModeDisplayString'
})
export class CreateModeDisplayStringPipe implements PipeTransform {
  constructor(public fretMapService: FretMapService) {
  }

  transform(
    note: string,
    noteExtender: string,
    mode: Mode
  ): string {
    return this.fretMapService.convertFretMapConfigurationToDisplayString(
      note,
      noteExtender as NoteExtenderString,
      mode
    );
  }
}
