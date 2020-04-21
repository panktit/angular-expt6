import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'display',
  pure: false
})
export class DisplayPipe extends UpperCasePipe implements PipeTransform {

  transform(name: string): string {
    let words = name.split(" ");
    let result = "";
    for(let word of words) {
      let first = super.transform(word.charAt(0));
      result = result+" "+first+word.slice(1);
    }
    return result;
  }
}
