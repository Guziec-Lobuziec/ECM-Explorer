import { Injectable } from '@angular/core';
import { EthAddress } from "./eth-address";

@Injectable({
  providedIn: 'root'
})
export class ContractConfigService {

  private manager:EthAddress
  private token:EthAddress

  setManagerAddres(address:EthAddress) {
    this.manager = address;
  }

  getManagerAddres(): EthAddress {
    return this.manager;
  }

  constructor() { }
}
