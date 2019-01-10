import { Injectable } from '@angular/core';
import { EthAddress } from "./eth-address";
import { Observable } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';

import { AgreementServiceMockService } from "./mock/agreement-service-mock.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if(environment.production)
      return new AgreementServiceMockService();
    else
      return new AgreementServiceMockService();
  }
})
export abstract class IAgreementService {

abstract fetchAgreement(agreementAddr: EthAddress):Observable<AgreementDescription>

}
