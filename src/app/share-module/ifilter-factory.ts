import { IQuery } from "./iquery";

export interface IFilterFactory {
    create(value:any, inner?:IQuery):IQuery
}
