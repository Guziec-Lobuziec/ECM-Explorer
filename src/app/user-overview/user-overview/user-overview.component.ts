import { Component, OnInit } from '@angular/core';
import { AgreementDescription } from '../../share-module/model/agreement-description';
import { agreementsList } from 'src/app/share-module/mock/agreement-list';


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class UserOverviewComponent implements OnInit {

  agreementsList: AgreementDescription[] = agreementsList;

  small: boolean = false;
  medium: boolean = false;
  large: boolean = false;

  onResize(event) {
    if (event.target.innerWidth <= 1400) {
      this.small = true;
      this.medium = false;
      this.large = false;
    }
    else if (event.target.innerWidth < 1800 && event.target.innerWidth > 1400) { // 768px portrait
      this.small = false;
      this.medium = true;
      this.large = false;
    }

    else if (event.target.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;
    }
  }

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 1400) {
      this.small = true;
      this.medium = false;
      this.large = false;
    }
    else if (window.innerWidth < 1800 && window.innerWidth > 1400) { // 768px portrait
      this.small = false;
      this.medium = true;
      this.large = false;
    }

    else if (window.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;
    }
  }

}
