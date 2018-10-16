import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from 'src/app/share/model/agreement-description';

@Component({
  selector: 'app-agreement-view',
  templateUrl: './agreement-view.component.html',
  styleUrls: ['./agreement-view.component.scss']
})
export class AgreementViewComponent implements OnInit {

  agreementDescription: AgreementDescription = {
    creationTime: new Date(2018, 10, 19),
    expirationTime: new Date(2018,10,20),
    status: 0,
    price: 8735,
    name: "Kapcie",
    description: "The best supreme kapcie",
    listOfParticipant: [
      {address: "xddd", role: "lul"},
      {address: "xqwe", role: "lusl"},
      {address: "xzxcvzxcvddd", role: "luadsfl"},
      {address: "aaa", role: "ee"}
    ],
    listOfAction: [
      {canonicName: "action1"},
      {canonicName: "action2"},
      {canonicName: "action3"}
    ],
    listOfPermittedActions: [
      {canonicName: "paction1"},
      {canonicName: "paction2"},
      {canonicName: "paction3"}
    ],
    listOfNotifications:[]
    };



  constructor() { }



  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
