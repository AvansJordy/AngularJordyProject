import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'developerfilter',
  pure: false
})
export class DeveloperfilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
