import { AgreementDescription } from "./model/agreement-description";
import { AbstractFilter } from "./abstract-filter";
import { IQuery } from "./iquery";

export class NameFilter extends AbstractFilter
{
    private query: string;
    constructor(query: string, inner:IQuery){
      super(inner)
      this.query = query;
    }

    filter(agreements: AgreementDescription[]): AgreementDescription[] {
         return agreements.filter(agreement => agreement.name === this.query)
    }
}
