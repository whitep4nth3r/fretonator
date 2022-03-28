import { Pipe, PipeTransform } from '@angular/core';
import { Enharmonics } from '../../util/constants';

@Pipe({
  name: 'getEnharmonicEquivalent'
})
export class GetEnharmonicEquivalentPipe implements PipeTransform {

  transform(note: string): string {
    for (const group of Enharmonics) {
      if (group.indexOf(note) === 0) {
        return group[1];
      }

      if (group.indexOf(note) === 1) {
        return group[0];
      }
    }

    return '';
  }
}
