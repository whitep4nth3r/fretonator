import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { NoteObject, Mode } from './symbol-to-note-obj.pipe';
import { FretMap } from '../../../common/fretonator/fretonator.component';

@Pipe({
  name: 'generateFretMap',
})
export class GenerateFretMapPipe implements PipeTransform {
  constructor(private generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): FretMap {
    const returnThis = this.generateFretMapService.getFretMapping(note, mode);
    console.log(returnThis);
    return returnThis;
  }
}
