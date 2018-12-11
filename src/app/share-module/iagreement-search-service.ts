import { Injectable } from '@angular/core';
import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";
import { Observable, from, of } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { take, skip } from 'rxjs/operators';
import { IFilterFactory } from "./ifilter-factory";
import { regToFactory } from "./regexp-to-filter";

import { AgreementSearchServiceMockService } from "./agreement-search-service-mock.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if(environment.production)
      return new AgreementSearchServiceMockService();
    else
      return new AgreementSearchServiceMockService();
  }
})
export abstract class IAgreementSearchService {

abstract searchPages(query: IQuery, pageNumber:number, pageSize:number): Observable<AgreementDescription[]>

abstract compileQuery(question: string) : IQuery
}
