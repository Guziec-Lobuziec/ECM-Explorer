import { Injectable } from '@angular/core';
import { IAgreementService } from "./iagreement-service";
import { EthAddress } from "./eth-address";
import { Observable, from, of  } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { agreementsList, agreementsAdresses } from './mock/agreement-list';

@Injectable({
  providedIn: 'root'
})
export class AgreementServiceMockService implements IAgreementService{

  constructor() { }

  fetchAgreement(agreementAddr: EthAddress):Observable<AgreementDescription> {
    return of(agreementsList[
      agreementsAdresses
        .map(addr => addr.toString())
        .findIndex( str => str === agreementAddr.toString() )
    ])
  }
}
