import { Status } from "./status";
import { Participant } from "./participant";
import { AgreementMethod } from "./agreement-method";
import { AgreementNotification } from "./agreement-notification";

export class AgreementDescription
{
   constructor(
       public creationTime: Date,
       public expirationTime: Date,
       public status: Status,
       public price: number,
       public name: string,
       public description: string,
       public listOfParticipant: Array<Participant>,
       public listOfAction: Array<AgreementMethod>,
       public listOfPermittedActions: Array<AgreementMethod>,
       public listOfNotifications: Array<AgreementNotification>,
       )
   {
       
   }


}

