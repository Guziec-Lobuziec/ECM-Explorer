import { Injectable } from '@angular/core';
import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";
import { Observable, from, of } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { take, skip } from 'rxjs/operators';
import { IFilterFactory } from "./ifilter-factory";
import { regToFactory } from "./regexp-to-filter";
import { IAgreementSearchService } from './iagreement-search-service';


@Injectable()
export class AgreementSearchService implements IAgreementSearchService {

  constructor() { }

  searchPages(query: IQuery, pageNumber:number, pageSize:number): Observable<AgreementDescription[]> {
    return;
  }

  compileQuery(question: string) : IQuery {
    return regToFactory
      .map( e => {return {entry: e, matched: question.match(e[0])}} )
      .filter( e => (e.matched !== null))
      .map( r => {return { index: r.matched.index, value: r.entry[2](r.matched), factory: r.entry[1] }})
      .sort( (a,b) => b.index-a.index)
      .reduce<IQuery>( (finalQuery, current) => current.factory.create(current.value, finalQuery), null )
  }

}
