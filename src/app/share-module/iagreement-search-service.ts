import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";


export interface IAgreementSearchService {
    
compileQuery(question: string, fallback: Option<IQuery>) : IQuery
}

