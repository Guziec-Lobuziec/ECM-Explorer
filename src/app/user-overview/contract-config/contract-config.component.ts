import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContractConfigService } from 'src/app/share-module/contract-config.service';
import { EthAddress } from "src/app/share-module/eth-address";

@Component({
  selector: 'app-contract-config',
  templateUrl: './contract-config.component.html',
  styleUrls: ['./contract-config.component.css']
})
export class ContractConfigComponent implements OnInit {

  config = new FormGroup({
    managerAddress: new FormControl(''),
  })

  constructor(private service:ContractConfigService) { }

  onSubmit() {
    this.service.setManagerAddres(EthAddress.parse(this.config.value.managerAddress))
  }

  ngOnInit() {
  }

}
