import { Injectable } from '@angular/core';
import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";
import { Observable, from, of, defer, zip } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { Status } from "./model/status";
import { take, skip, tap, filter, map, concatAll } from 'rxjs/operators';
import { IFilterFactory } from "./ifilter-factory";
import { regToFactory } from "./regexp-to-filter";
import { EthAddress } from "./eth-address";
import { IAgreementSearchService } from './iagreement-search-service';
import { ClientService } from "./client.service";
import { ContractConfigService } from "./contract-config.service";

declare let require: any;
const utf8 = require('utf8');

let TruffleContract = require('truffle-contract');
let IAgreementManagerABI = require('./ABI/IAgreementManager.json')
let StateCommonsABI = require('./ABI/StateCommons.json')

@Injectable()
export class AgreementSearchService implements IAgreementSearchService {

  private agreementManagerContract
  private StateCommonsContract

  constructor(
    private config:ContractConfigService,
    private clientService:ClientService,
  ) {
    this.agreementManagerContract = TruffleContract(IAgreementManagerABI);
    this.agreementManagerContract.setProvider(
      this.clientService.getWeb3().currentProvider
    );

    this.StateCommonsContract = TruffleContract(StateCommonsABI);
    this.StateCommonsContract.setProvider(
      this.clientService.getWeb3().currentProvider
    );
  }

  searchPages(query: IQuery, pageNumber:number, pageSize:number): Observable<AgreementDescription[]> {
    return defer( async () => {
        return await this.agreementManagerContract.at(this.config.getManagerAddres().toString())
    }).pipe(
      map(instance => defer(async () => {
        return await instance.search();
      }).pipe(
        map(raw => raw as string[]),
        map(results => results.filter(addr => addr !== '0x0000000000000000000000000000000000000000')),
        tap(l => console.log(l))
      )),
      concatAll(),
      map(results => {
        return results
        .map(r => defer(async () => {return await this.StateCommonsContract.at(r)}))
        .map(ob => {
          return ob.pipe(
            map(contract => {
              return zip(
                defer(async () => {return await contract.getCreationTimestamp()}),
                defer(async () => {return await contract.getBlocksToExpiration()}),
                defer(async () => {return await contract.getStatus()}),
                defer(async () => {return await contract.getPrice()}),
                defer(async () => {return await contract.getName()}),
                defer(async () => {return await contract.getDescription()})
              ).pipe(
                map(data => {
                  return new AgreementDescription(
                    EthAddress.parse(contract.address),
                    data[0],
                    data[0] + data[1]*12,
                    data[2],
                    data[3],
                    this.byte32ArrayToUTF8(data[4]),
                    this.byte32ArrayToUTF8(data[5]),
                    [],
                    [],
                    [],
                    []
                  );
                })
              )
            }),
            concatAll()
          )
        })
      }),
      map(obArr => zip(obArr)),
      concatAll()
    );
  }

  // new AgreementDescription(
  //   EthAddress.parse(single),
  //   onlineAgreement.getCreationTimestamp(),
  //   onlineAgreement.getCreationTimestamp() + onlineAgreement.getBlocksToExpiration()*12,
  //   onlineAgreement.getStatus(),
  //   onlineAgreement.getPrice(),
  //   this.byte32ArrayToUTF8(onlineAgreement.getName()),
  //   this.byte32ArrayToUTF8(onlineAgreement.getDescription()),
  //   [],
  //   [],
  //   [],
  //   []
  // );

  compileQuery(question: string) : IQuery {
    return regToFactory
      .map( e => {return {entry: e, matched: question.match(e[0])}} )
      .filter( e => (e.matched !== null))
      .map( r => {return { index: r.matched.index, value: r.entry[2](r.matched), factory: r.entry[1] }})
      .sort( (a,b) => b.index-a.index)
      .reduce<IQuery>( (finalQuery, current) => current.factory.create(current.value, finalQuery), null )
  }

  private byte32ArrayToUTF8(input:string[]):string {
    return utf8.encode(
      [].concat.apply(
        [],
        input.map(e => {
          let m = e.replace('0x', '')
          let arr = []
          for(let i = 0; i<m.length-2; ++i) {
            arr.push(m.substr(-i-2,-i))
          }
          return arr;
        })
      )
      .map(e => '\\x'+e)
      .join()
    )
  }

}
