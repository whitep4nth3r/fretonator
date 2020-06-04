import { Pipe, PipeTransform } from '@angular/core';
import { NoteExtenderString, Mode } from '../../../util/types';
import { FretMapService } from '../../fret-map/fret-map.service';

@Pipe({
  name: 'createChipLinkTitle',
})
export class CreateChipLinkTitlePipe implements PipeTransform {
  constructor(public generateFretMapService: FretMapService) {}
  transform(
    note: string,
    noteExtender: NoteExtenderString,
    mode: Mode
  ): string {
    return this.generateFretMapService.convertFretMapConfigurationToDisplayString(
      note,
      noteExtender,
      mode
    );
  }
}
