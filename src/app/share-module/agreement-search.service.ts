import { Injectable } from '@angular/core';
import { IQuery } from "./iquery";
import { Option } from "fp-ts/lib/Option"
import { NameFilter } from "./name-filter";
import { Observable, from, of, forkJoin } from 'rxjs';
import { AgreementDescription } from './model/agreement-description';
import { Status } from "./model/status";
import { take, skip, tap, filter, map } from 'rxjs/operators';
import { IFilterFactory } from "./ifilter-factory";
import { regToFactory } from "./regexp-to-filter";
import { EthAddress } from "./eth-address";
import { IAgreementSearchService } from './iagreement-search-service';
import { ClientService } from "./client.service";

import * as TruffleContract from 'truffle-contract';

declare let require: any;

let IAgreementManagerABI = require('./ABI/IAgreementManager.json')
let AgreementCommonsABI = require('./ABI/AgreementCommons.json')

@Injectable()
export class AgreementSearchService implements IAgreementSearchService {

  constructor(
    private clientService:ClientService,
    private agreementManagerContract,
    private agreementCommonsContract,
  ) {
    this.agreementManagerContract = TruffleContract(IAgreementManagerABI);
    this.agreementManagerContract.setProvider(
      this.clientService.getWeb3().currentProvider
    );

    this.agreementCommonsContract = TruffleContract(AgreementCommonsABI);
    this.agreementCommonsContract.setProvider(
      this.clientService.getWeb3().currentProvider
    );
  }

  searchPages(query: IQuery, pageNumber:number, pageSize:number): Observable<AgreementDescription[]> {
    return of(this.agreementManagerContract.deployed()).pipe(
      tap(instance => instance.search()),
      filter(agreementAddr => agreementAddr !== '0x0000000000000000000000000000000000000000'),
      map(agreementAddr => {return {
        address: EthAddress.parse(agreementAddr),
        creationTime: null,
        expirationTime: null,
        status: Status.New,
        price: 0,
        name: '',
        description: '',
        listOfParticipant: [],
        listOfAction: [],
        listOfPermittedActions: [],
        listOfNotifications: [],
      }}),
      tap(blob => forkJoin(
        of(this.agreementCommonsContract.deployed()).pipe(
          tap(instance => blob.creationTime = instance.getCreationTimestamp())
        )
      ))
    )
  }

  compileQuery(question: string) : IQuery {
    return regToFactory
      .map( e => {return {entry: e, matched: question.match(e[0])}} )
      .filter( e => (e.matched !== null))
      .map( r => {return { index: r.matched.index, value: r.entry[2](r.matched), factory: r.entry[1] }})
      .sort( (a,b) => b.index-a.index)
      .reduce<IQuery>( (finalQuery, current) => current.factory.create(current.value, finalQuery), null )
  }

}
