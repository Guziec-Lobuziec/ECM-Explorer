import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from '../../share-module/model/agreement-description';


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  agreementsList: AgreementDescription[] =
  [{
    creationTime: new Date(2018, 10, 19),
    expirationTime: new Date(2018,10,20),
    status: 0,
    price: 8735,
    name: "Kapcie",
    description: "The best supreme kapcie",
    listOfParticipant: [],
    listOfAction: [],
    listOfPermittedActions: [],
    listOfNotifications:[]
    },
    {
      creationTime: new Date(2018, 10, 19),
      expirationTime: new Date(2018,10,20),
      status: 0,
      price: 8735,
      name: "Kapcie",
      description: "The best supreme kapcie",
      listOfParticipant: [],
      listOfAction: [],
      listOfPermittedActions: [],
      listOfNotifications:[]
      },
      {
        creationTime: new Date(2018, 10, 19),
        expirationTime: new Date(2018,10,20),
        status: 0,
        price: 8735,
        name: "Kapcie",
        description: "The best supreme kapcie",
        listOfParticipant: [],
        listOfAction: [],
        listOfPermittedActions: [],
        listOfNotifications:[]
        },
        {
          creationTime: new Date(2018, 10, 19),
          expirationTime: new Date(2018,10,20),
          status: 0,
          price: 8735,
          name: "Kapcie",
          description: "The best supreme kapcie",
          listOfParticipant: [],
          listOfAction: [],
          listOfPermittedActions: [],
          listOfNotifications:[]
          },

  ]
  constructor() { }

  ngOnInit() {
  }

}
