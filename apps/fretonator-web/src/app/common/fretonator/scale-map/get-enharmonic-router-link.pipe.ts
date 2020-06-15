import { Pipe, PipeTransform } from '@angular/core';
import { Enharmonics } from '../../../util/constants';

@Pipe({
  name: 'getEnharmonicRouterLink'
})
export class GetEnharmonicRouterLinkPipe implements PipeTransform {

  transform(note: string, noteExtenderString: string, mode: string): string[] {
    let newNote;

    const extenderStringAsSymbol = noteExtenderString === 'sharp' ? '#' : '♭';
    const enharmonicItem = note.toUpperCase() + extenderStringAsSymbol;

    for(const group of Enharmonics) {
        if (group[0] === enharmonicItem) {
            newNote = group[1].charAt(0).toLowerCase();
        } else if (group[1] === enharmonicItem) {
          newNote = group[0].charAt(0).toLowerCase();
        }
    }

    const newNoteExtender = noteExtenderString === 'sharp' ? 'flat' : 'sharp';

    return ['/', newNote, newNoteExtender, mode];
  }

}
