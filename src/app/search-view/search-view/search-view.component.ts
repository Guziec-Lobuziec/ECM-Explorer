import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserOverviewComponent } from 'src/app/user-overview/user-overview/user-overview.component';
//import { AgreementDescription } from 'src/app/share/model/agreement-description';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  name = 'search';

  contracts = UserOverviewComponent;

  constructor() { }

  ngOnInit() {
  }

}
