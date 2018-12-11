import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from '../../share-module/model/agreement-description';
import { agreementsList } from 'src/app/share-module/mock/agreement-list';


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  agreementsList: AgreementDescription[] = agreementsList;
  constructor() { }

  ngOnInit() {
  }

}
