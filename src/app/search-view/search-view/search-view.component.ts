import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  name = 'SearchView';

  contracts = [
    'halloween costumes for sale',
    'peanuts shop',
    'big contract',
    'greenland snow contract',
    'discount swords for sale',
    'wizardry shop'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
