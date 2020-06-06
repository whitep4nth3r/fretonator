import { Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Enharmonics } from '../../../util/constants';

@Pipe({
  name: 'getEnharmonicRouterLink'
})
export class GetEnharmonicRouterLinkPipe implements PipeTransform {

  transform(note: string, noteExtenderString: string, mode: string): string[] {
    let newNote;

    for(const group of Enharmonics) {
        if (group[0].includes(note.toUpperCase())) {
            newNote = group[1].charAt(0).toLowerCase();
        }

        if (group[1].includes(note.toUpperCase())) {
          newNote = group[0].charAt(0).toLowerCase();
        }
    }

    const newNoteExtender = noteExtenderString === 'sharp' ? 'flat' : 'sharp';

    return ['/', newNote, newNoteExtender, mode];
  }

}
