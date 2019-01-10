import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from '../../share-module/model/agreement-description';
import { agreementsList } from 'src/app/share-module/mock/agreement-list';
import { ClientService } from "src/app/share-module/client.service";
import { IAgreementSearchService } from 'src/app/share-module/iagreement-search-service';
import { EthAddress } from "src/app/share-module/eth-address";


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  agreementsList: AgreementDescription[] = agreementsList;
  userAddress:EthAddress;
  constructor(
    private clientService:ClientService,
    private searchService: IAgreementSearchService
  ) { }

  ngOnInit() {
    this.userAddress = this.clientService.getClientAddresses()[0]
  }

}
