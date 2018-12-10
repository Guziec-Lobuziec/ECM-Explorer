import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-agreement-one-two',
  templateUrl: './agreement-one-two.component.html',
  styleUrls: ['./agreement-one-two.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class AgreementOneTwoComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Choose Agreement Type' },
      { label: 'Create Agreement' },
      { label: 'Confirm Data'}
  ];
    this.activeIndex = 1;
  }

}
