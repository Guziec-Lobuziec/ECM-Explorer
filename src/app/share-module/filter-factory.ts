import { NameFilter } from "./name-filter";
import { PriceFilter } from "./price-filter";
import { DateFilter } from "./date-filter";
import { IFilterFactory } from "./ifilter-factory";
import { IQuery } from "./iquery";
import { of } from "rxjs";
import { map,reduce, toArray} from "rxjs/operators";
import { pipe } from "rxjs/index";
import { tap } from "rxjs/operators";




export class FilterFactory implements IFilterFactory
{
    createFilter(value: string, inner: IQuery) {
        of(regToFactory).pipe(
            map( e => {return {entry: e, matched: []}} ),
            tap( n => {n.matched = n.entry[0].exec()} ),
            map( r => {return { index: r.entry[0].lastIndex, value:  r.entry[2](r.matched), factory: r.entry[1] }}),
            toArray(),
            map(arr => arr.sort( (a,b) => b.index-a.index).reduce( (finalQuery, current) => current.factory.create(current.value, finalQuery) )),
            )
    }
    
}