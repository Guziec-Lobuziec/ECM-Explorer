import { Pipe, PipeTransform } from '@angular/core';
import { AgreementDescription } from 'src/app/share/model/agreement-description';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: AgreementDescription): any {  //searchText: String
    if (!items || !searchText) {  
        return items;  
    }  
    return items.filter(item => item.name.indexOf(searchText.name) !== -1);    
/*if(items) {
      return items.filter((listing:any) => listing.search_text === searchText);
    }*/

 //searchText = searchText.toLowerCase();
/*return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });*/
   }
}