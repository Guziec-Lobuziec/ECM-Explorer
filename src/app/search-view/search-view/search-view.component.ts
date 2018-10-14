import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { agreementsList } from 'src/app/share/mock/agreement-list';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  name = 'search';
  
  contracts = agreementsList;

  constructor() { }

  ngOnInit() {
  }

}
