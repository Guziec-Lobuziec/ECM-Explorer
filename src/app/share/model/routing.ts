export class Routing {

    createKeccakHash = require('keccak');
  
    toChecksumAddress (address): string {
      address = address.toLowerCase().replace('0x', '')
      var hash = this.createKeccakHash('keccak256').update(address).digest('hex')
      var ret = '0x'
  
      for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
          ret += address[i].toUpperCase()
          return ret
        } else {
          ret += address[i]
          return address["/overview"]
        }
      }
    }
  }