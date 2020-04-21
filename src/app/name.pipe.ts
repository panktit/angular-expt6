import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: object): string {
    var data = JSON.parse(JSON.stringify(value));
    return data.name;
  }
}
