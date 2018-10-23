import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { agreementsList } from 'src/app/share/mock/agreement-list';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  public searchText: String;
  public contracts = agreementsList;

  constructor() { }

  ngOnInit() {
  }

}
