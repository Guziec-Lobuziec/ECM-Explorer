import * as Web3 from 'web3';

declare let window: any;


function extend<T, U, A>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}


export class BlockNumber {


    private web3Provider: null
    constructor()
    {
        if (typeof window.web3 !== 'undefined') {
            this.web3Provider = window.web3.currentProvider;
            } else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            
            window.web3 = new Web3(this.web3Provider);

    }
    }

    getBlockNumber()
    {
        return window.web3.eth.blockNumber();
    }


}

class PendingBlockNumber extends BlockNumber
{
  getPendingBlock()
  {
    return window.web3.eth.getBlock('pending');
  }
}

class LatestBlockNumber extends BlockNumber
{
    getLatestBlock()
    {
        return window.web3.eth.getBlock('latest');
    }
    
}