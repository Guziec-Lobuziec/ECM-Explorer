import { IQuery } from "./iquery";
import { AgreementDescription } from "./model/agreement-description";

export class DateFilter implements IQuery
{
    constructor(public query: any)
    {

    }
    process(agreements : AgreementDescription[]): AgreementDescription[] {
        return agreements.filter(agreement => agreement.expirationTime.getTime() === this.query.getTime()|| agreement.creationTime.getTime() === this.query.getTime())
    }

    processAfterExpirationTime(agreements: AgreementDescription[]): AgreementDescription[]
    {
        return agreements.filter(agreement => agreement.expirationTime >= this.query)
    }

}