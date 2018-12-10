import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: any, inputFilter: boolean): any {
    if (!searchText){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (searchText && Array.isArray(items)) {
      let filterKeys = Object.keys(searchText);

      if (inputFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(searchText[keyName], 'gi').test(item[keyName])) || searchText[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(searchText[keyName], 'gi').test(item[keyName]) || searchText[keyName] == "";
          });
        });
      }
    }
  }
}