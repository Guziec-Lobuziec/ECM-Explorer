import { Injectable } from '@angular/core';
import { EthAddress } from "./eth-address";
import { Observable } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { IAgreementService } from "./iagreement-service";

@Injectable()
export class AgreementService implements IAgreementService  {

  constructor() { }

  fetchAgreement(agreementAddr: EthAddress):Observable<AgreementDescription> {
      return;
  }
}
