import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from '../../share-module/model/agreement-description';


@Component({
  selector: 'app-agreement-view',
  templateUrl: './agreement-view.component.html',
  styleUrls: ['./agreement-view.component.css']
})
export class AgreementViewComponent implements OnInit {

  agreementDescription: AgreementDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
