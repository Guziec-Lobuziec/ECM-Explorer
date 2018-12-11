import { Injectable } from '@angular/core';
import { EthAddress } from "./eth-address";
import { Observable } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';

@Injectable({
  providedIn: 'root'
})
export abstract class IAgreementService {

abstract fetchAgreement(agreementAddr: EthAddress):Observable<AgreementDescription>

}
