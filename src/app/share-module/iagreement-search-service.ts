import { Injectable, inject } from '@angular/core';
import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";
import { Observable } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { ContractConfigService } from "./contract-config.service";
import { ClientService } from "./client.service";
import { AgreementSearchServiceMockService } from "./mock/agreement-search-service-mock.service";
import { AgreementSearchService } from "./agreement-search.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if(environment.production||environment.integration){
      return new AgreementSearchService(
        inject(ContractConfigService),
        inject(ClientService)
      );
    }
    else
      return new AgreementSearchServiceMockService();
  }
})
export abstract class IAgreementSearchService {

abstract searchPages(query: IQuery, pageNumber:number, pageSize:number): Observable<AgreementDescription[]>

abstract compileQuery(question: string) : IQuery
}
