import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertIntervalIntegerToString'
})
export class ConvertIntervalIntegerToStringPipe implements PipeTransform {

  transform(interval: number): string {
    switch (interval) {
      case(1): {
        return 'semitone';
      }
      case(2): {
        return 'tone';
      }
      case(3): {
        return 'aug 2nd';
      }
      case(4): {
        return 'min 3rd';
      }
      default: {
        return '';
      }
    }
  }
}
