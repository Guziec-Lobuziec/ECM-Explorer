import { AgreementDescription } from "./model/agreement-description";

export interface IQuery {

  process(agreements: AgreementDescription[]): AgreementDescription[];
  searchPages(query: IQuery, pageNumber:number, pageSize:number)
  
}
