import { IQuery } from "./iquery";
import { AgreementDescription } from "./model/agreement-description";

export abstract class AbstractFilter implements IQuery {

  constructor(private inner?:IQuery)
  {

  }

  process(agreements: AgreementDescription[]): AgreementDescription[] {
      if(this.inner === null)
        return this.filter(agreements);
      else
       return this.filter(this.inner.process(agreements));
  }

  abstract filter(agreements: AgreementDescription[]): AgreementDescription[];

}
