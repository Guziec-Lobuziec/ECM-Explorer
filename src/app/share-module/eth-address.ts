import * as keccak from 'js-sha3';

export class EthAddress {

private address:string

static parse(address:string): EthAddress {
    return new EthAddress(EthAddress.toChecksumAddress(address))
}

constructor(address:string) {
  if(address === EthAddress.toChecksumAddress(address.toLowerCase().replace('0x', ''))){
    this.address = address;
  } else {
    throw Error("Invalid address: "+address)
  }
}

public toString() {
  return this.address;
}

private static toChecksumAddress (address:string):string {
  address = address.toLowerCase().replace('0x', '')
  var keccakHash = keccak.keccak256.create()
  keccakHash.update(address)
  var hash = keccakHash.hex()
  var ret = '0x'

  for (var i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase()
    } else {
      ret += address[i]
    }
  }

  return ret
}


}
