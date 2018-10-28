import { Injectable } from '@angular/core';
import { IAgreementSearchService } from './iagreement-search-service';
import { Option} from 'fp-ts/lib/Option';
import { IQuery } from '../share-module/iquery'
import { NameFilter } from './/name-filter';
import { filterQueryId } from '@angular/core/src/view/util';
import { agreementsList } from './mock/agreement-list';

@Injectable({
  providedIn: 'root'
})
export class AgreementSearchServiceMockService implements IAgreementSearchService  {
  
  
  constructor()
  {

  }
  
  compileQuery(question: string, fallback: Option<IQuery>): IQuery {
    return  new NameFilter(question)
  }

}
