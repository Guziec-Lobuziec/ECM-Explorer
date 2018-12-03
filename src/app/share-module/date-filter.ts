import { AgreementDescription } from "./model/agreement-description";
import { AbstractFilter } from "./abstract-filter";
import { IQuery } from "./iquery";

export class DateFilter extends AbstractFilter
{
    private query: Date;
    constructor(query: Date, inner:IQuery){
      super(inner)
      this.query = query;
    }

    filter(agreements : AgreementDescription[]): AgreementDescription[] {
        return agreements.filter(agreement => agreement.expirationTime.getTime() === this.query.getTime()|| agreement.creationTime.getTime() === this.query.getTime())
    }

    processAfterExpirationTime(agreements: AgreementDescription[]): AgreementDescription[]
    {
        return agreements.filter(agreement => agreement.expirationTime >= this.query)
    }

}
