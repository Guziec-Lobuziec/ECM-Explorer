import { Injectable } from '@angular/core';
import { EthAddress } from "./eth-address";
import { Observable, defer } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import * as Web3 from 'web3';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private web3Provider: any;

  constructor() {

    if (typeof window.web3 !== 'undefined') {
        this.web3Provider = window.web3.currentProvider;
      } else {
        this.web3Provider = new Web3.providers.HttpProvider(environment.ethClient);
      }

      console.log(environment.ethClient)

      window.web3 = new Web3(this.web3Provider);
  }

  getWeb3(): any {
    return window.web3;
  }

  getClientAddresses(): EthAddress[] {
    return window.web3.eth.accounts.map(
      addr => EthAddress.parse(addr)
    )
    // return defer(async function() {
    //   return await window.web3.eth.defaultAccount
    // }).pipe(
    //   map(addr => EthAddress.parse(addr))
    // )
  }
}
