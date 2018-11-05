import { Component, OnInit } from '@angular/core';
import { agreementsList } from '../../share-module/mock/agreement-list';



@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  public searchText: String;
  public contracts = agreementsList;

  constructor() { }

  ngOnInit() {
  }

}
