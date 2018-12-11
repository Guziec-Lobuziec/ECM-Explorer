import { AgreementDescription } from "../model/agreement-description";
import { EthAddress } from "../eth-address";

export const agreementsFilterNameList: AgreementDescription[] =
  [
    {
      address: EthAddress.parse('30c8d95fb80c874dc285284147d4b4a4faeb05a9'),
      creationTime: new Date(2018, 12, 19),
      expirationTime: new Date(2018,11,20),
      status: 0,
      price: 8735,
      name: "Kapcie",
      description: "The supreme kapcie",
      listOfParticipant: [],
      listOfAction: [],
      listOfPermittedActions: [],
      listOfNotifications:[]
      },
  ]
