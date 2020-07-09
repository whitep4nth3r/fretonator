import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addParenthesis'
})
export class AddParenthesisPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.length > 0 ? `(${value})` : '';
  }
}
