import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AgreementDescription } from '../../share-module/model/agreement-description';
import { IAgreementService } from "../../share-module/iagreement-service";
import { EthAddress } from "../../share-module/eth-address";
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-agreement-view',
  templateUrl: './agreement-view.component.html',
  styleUrls: ['./agreement-view.component.css']
})
export class AgreementViewComponent implements OnInit {

  agreementDescription: AgreementDescription;

  constructor(
    private agreementService:IAgreementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.agreementService
          .fetchAgreement(new EthAddress(params.get('address')))
      )
    ).subscribe(agreement => {
      this.agreementDescription = agreement
    });

  }

}
