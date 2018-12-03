import { IQuery } from "./iquery";
import { AgreementDescription } from "./model/agreement-description";

export class PriceFilter implements IQuery
{
   
    constructor(public query: any)
    {

    }

    process(agreements: AgreementDescription[]): AgreementDescription[] {
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