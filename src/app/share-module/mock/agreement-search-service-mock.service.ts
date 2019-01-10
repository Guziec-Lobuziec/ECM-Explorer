import { Injectable } from '@angular/core';
import { IAgreementSearchService } from '../iagreement-search-service';
import { IQuery } from '../iquery'
import { Observable, from, of } from 'rxjs';
import { AgreementDescription } from '../model/agreement-description';
import { agreementsList } from './agreement-list';
import { take, skip } from 'rxjs/operators';
import { IFilterFactory } from "../ifilter-factory";
import { regToFactory } from "../regexp-to-filter";


@Injectable()
export class AgreementSearchServiceMockService implements IAgreementSearchService  {

  searchPages(query: IQuery, pageNumber: number, pageSize: number): Observable<AgreementDescription[]>
  {
    return of(query.process(agreementsList)).pipe(skip(pageNumber*pageSize-1)).pipe(take(pageSize))
  }


  compileQuery(question: string): IQuery {

    return regToFactory
      .map( e => {return {entry: e, matched: question.match(e[0])}} )
      .filter( e => (e.matched !== null))
      .map( r => {return { index: r.matched.index, value: r.entry[2](r.matched), factory: r.entry[1] }})
      .sort( (a,b) => b.index-a.index)
      .reduce<IQuery>( (finalQuery, current) => current.factory.create(current.value, finalQuery), null )
  }

}
