import { EthAddress } from "./eth-address";
import { Observable } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';

export interface IAgreementService {

fetchAgreement(agreementAddr: EthAddress):Observable<AgreementDescription>

}
