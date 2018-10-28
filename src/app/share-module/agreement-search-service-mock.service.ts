import { Injectable } from '@angular/core';
import { IAgreementSearchService } from './iagreement-search-service';
import { IQuery } from '../share-module/iquery'
import { NameFilter } from './/name-filter';
import { Observable, from } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { agreementsList } from './mock/agreement-list';
import { take, skip } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AgreementSearchServiceMockService implements IAgreementSearchService  {
  

  searchPages(query: IQuery, pageNumber: number, pageSize: number): Observable<AgreementDescription | AgreementDescription[]>
  { 
    return from(query.process(agreementsList)).pipe(skip(pageNumber*pageSize-1)).pipe(take(10))
  }
  
  
  constructor()
  {

  }
  
  compileQuery(question: string): IQuery {
    return  new NameFilter(question)
  }

  ngOnInit(): void {
    this.searchPages(this.compileQuery('name:Kapcie'),12,2)
    
  }
}
