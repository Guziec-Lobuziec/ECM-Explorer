import { IFilterFactory } from "./ifilter-factory";
import { IQuery } from "./iquery";
import { NameFilter } from "./name-filter";
import { PriceFilter } from "./price-filter";

export const regToFactory:[RegExp, IFilterFactory,  (m:string[]) => string][] = [
  [
    new RegExp('name:((\s*[^:\s]*)*)(?!(\w*:))'),
    {
      create: (value:string, inner?:IQuery) => {
        return new NameFilter(value, inner);
      }
    },
    (m:string[]) => m[1]
  ],
  [
    new RegExp('price:((\s*[^:\d]*)*)(?!(\w*:))'),
    {
      create: (value: number, inner?:IQuery) => {
        return new PriceFilter(value,inner);
      }
    },
    (m:string[]) => m[1]
  ]
];
