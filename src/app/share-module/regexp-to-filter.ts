import { IFilterFactory } from "./ifilter-factory";
import { IQuery } from "./iquery";
import { NameFilter } from "./name-filter";
import { PriceFilter } from "./price-filter";

export const regToFactory:[RegExp, IFilterFactory,  (m:string[]) => string][] = [
  [
    /name:((\s*[^:\s]*)*)(?!(\w*:))/,
    {
      create: (value:string, inner?:IQuery) => {
        return new NameFilter(value.trim(), inner);
      }
    },
    (m:string[]) => m[1]
  ],
  [
    /price:((\s*[^:\D]*)*)(?!(\w*:))/,
    {
      create: (value: string, inner?:IQuery) => {
        return new PriceFilter(parseInt(value),inner);
      }
    },
    (m:string[]) => m[1]
  ]
];
