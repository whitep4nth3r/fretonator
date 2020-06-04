import { Pipe, PipeTransform } from '@angular/core';
import { Mode, NoteExtenderString } from '../../../util/types';
import { FretMapService } from '../../fret-map/fret-map.service';

@Pipe({
  name: 'createChipLinkTitle',
})
export class CreateChipLinkTitlePipe implements PipeTransform {
  constructor(public generateFretMapService: FretMapService) {}
  transform(
    note: string,
    noteExtender: string,
    mode: Mode
  ): string {
    return this.generateFretMapService.convertFretMapConfigurationToDisplayString(
      note,
      noteExtender as NoteExtenderString,
      mode
    );
  }
}
