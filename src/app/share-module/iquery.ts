import { AgreementDescription } from "./model/agreement-description";

export interface IQuery {

  process(agreements: AgreementDescription[]): AgreementDescription[];
  
}
