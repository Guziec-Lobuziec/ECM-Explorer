import { IQuery } from "./iquery";

export interface IFilterFactory {
    createFilter(value:string, inner:IQuery)
    }