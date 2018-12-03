import { AgreementDescription } from "./model/agreement-description";
import { AbstractFilter } from "./abstract-filter";
import { IQuery } from "./iquery";

export class PriceFilter extends AbstractFilter
{
    private query: number;
    constructor(query: number, inner:IQuery){
      super(inner)
      this.query = query;
    }

    filter(agreements: AgreementDescription[]): AgreementDescription[] {
        return agreements.filter(agreement => agreement.price === this.query)
    }

    processBeyond(agreements:AgreementDescription[]): AgreementDescription[]
    {
        return agreements.filter(agreement => agreement.price >= this.query)
    }

    processBelow(agreements:AgreementDescription[]): AgreementDescription[]
    {
        return agreements.filter(agreement => agreement.price <= this.query)
    }
}
