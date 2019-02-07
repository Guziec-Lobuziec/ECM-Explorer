import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AgreementDescription } from '../../share-module/model/agreement-description';
import { IAgreementService } from "../../share-module/iagreement-service";
import { EthAddress } from "../../share-module/eth-address";
import { switchMap, map } from 'rxjs/operators';
import { Participant } from 'src/app/share-module/model/participant';
import { pipe } from 'fp-ts/lib/function';


@Component({
  selector: 'app-agreement-view',
  templateUrl: './agreement-view.component.html',
  styleUrls: ['./agreement-view.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AgreementViewComponent implements OnInit {

  agreementDescription: AgreementDescription;

  small: boolean = false;
  medium: boolean = false;
  large: boolean = false;

  onResize(event) {
    if (event.target.innerWidth <= 1600) {
      this.small = true;
      this.medium = false;
      this.large = false;

      console.log("small");
    }
    else if (event.target.innerWidth < 1800 && event.target.innerWidth > 1600) { // 768px portrait
      this.small = false;
      this.medium = true;
      this.large = false;

      console.log("medium");
    }

    else if (event.target.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;

      console.log("large");
    }
  }

  constructor(
    private agreementService:IAgreementService,
    private route: ActivatedRoute
  ) { }

  

  
  ngOnInit(): void {

    if (window.innerWidth <= 1600) {
      this.small = true;
      this.medium = false;
      this.large = false;
    }
    else if (window.innerWidth < 1800 && window.innerWidth > 1600) {
      this.small = false;
      this.medium = true;
      this.large = false;
    }

    else if (window.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;
    }

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
