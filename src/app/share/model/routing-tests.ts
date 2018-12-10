import {Routing} from "./routing";

describe('RoutingValidationTests', () => {
    
    it('address should match', () => {
        Routing.toChecksumAddress('0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359').toEqual('0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',"addresses should match")
    })
})