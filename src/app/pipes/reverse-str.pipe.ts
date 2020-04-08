import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string): string {
    let newStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
        newStr += value.charAt(i);
    }
    return newStr;
    }
}
