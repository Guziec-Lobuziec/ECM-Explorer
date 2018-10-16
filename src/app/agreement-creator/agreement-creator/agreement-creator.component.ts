import { Component, OnInit } from '@angular/core';
import { MockAgreementTypes } from 'src/share/mock/mock-agreement-types';
//PrimeNG

@Component({
  selector: 'app-agreement-creator',
  templateUrl: './agreement-creator.component.html',
  styleUrls: ['./agreement-creator.component.scss']
})

export class AgreementCreatorComponent implements OnInit {

  agreements = MockAgreementTypes;

  constructor() {
  }

    ngOnInit() {}


    



}
