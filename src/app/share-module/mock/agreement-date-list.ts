import { AgreementDescription } from "../model/agreement-description";
import { EthAddress } from "../eth-address";


export const agreementsDateList: AgreementDescription[] =
  [
      {
        address: EthAddress.parse('81cd2b96a2a7625fe76f5f8c5e3032843268cc82'),
        creationTime: new Date(2017, 10, 19),
        expirationTime: new Date(2018,11,20),
        blockToExpire: 1000,
        status: 0,
        price: 8735,
        name: "New peanut contract shop",
        description: "The best supreme kapcie",
        listOfParticipant: [],
        listOfAction: [],
        listOfPermittedActions: [],
        listOfNotifications:[]
        },
        {
          address: EthAddress.parse('30c8d95fb80c874dc285284147d4b4a4faeb05a9'),
          creationTime: new Date(2018, 12, 19),
          expirationTime: new Date(2018,11,20),
          blockToExpire: 1000,
          status: 0,
          price: 8735,
          name: "Kapcie",
          description: "The supreme kapcie",
          listOfParticipant: [],
          listOfAction: [],
          listOfPermittedActions: [],
          listOfNotifications:[]
          },
          {
            address: EthAddress.parse('57a3e7088651b237cd363d7025554a63d47fc21f'),
            creationTime: new Date(2018, 12, 19),
            expirationTime: new Date(2018,11,20),
            blockToExpire: 1000,
            status: 0,
            price: 8731,
            name: "Kapcie",
            description: "The supreme kapcie",
            listOfParticipant: [],
            listOfAction: [],
            listOfPermittedActions: [],
            listOfNotifications:[]
            },

  ]
