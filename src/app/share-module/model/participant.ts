import { EthAddress } from "../eth-address";

export class Participant {
    
    constructor(
        public address: EthAddress,
        public role: string)
    {

    }
}
