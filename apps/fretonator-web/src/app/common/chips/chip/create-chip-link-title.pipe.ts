import { Pipe, PipeTransform } from '@angular/core';
import { NoteExtenderString, Mode } from '../../../util/types';
import { GenerateFretMapService } from '../../generate-fret-map/generate-fret-map.service';

@Pipe({
  name: 'createChipLinkTitle',
})
export class CreateChipLinkTitlePipe implements PipeTransform {
  constructor(public generateFretMapService: GenerateFretMapService) {}
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
