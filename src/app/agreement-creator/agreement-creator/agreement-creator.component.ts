import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-agreement-creator',
  templateUrl: './agreement-creator.component.html',
  styleUrls: ['./agreement-creator.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class AgreementCreatorComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Choose Agreement Type' },
      { label: 'Create Agreement' },
      { label: 'Confirm Data'}
  ];
    this.activeIndex = 0;
  }

}
