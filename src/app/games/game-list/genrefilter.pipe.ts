import {Input, Pipe, PipeTransform} from '@angular/core';
import {Game} from "../game.model";

@Pipe({
  name: 'genrefilter'
})
export class GenrefilterPipe implements PipeTransform {
  @Input() game: Game;
  @Input() index: string;

  transform(value: any, filterString: string, propName: string): any {
    if (value === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      this.index = this.game._id;

      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
