import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidepanel-view',
  templateUrl: './sidepanel-view.component.html',
  styleUrls: ['./sidepanel-view.component.css']
})
export class SidepanelViewComponent implements OnInit {

  items: Object;

  constructor(private router: Router) { }

  ngOnInit() {
    /*this.items = [
      { label: 'Search', icon: 'pi pi-pi pi-search' ,routerLink: ['/search'] },
      { label: 'Overview', icon: 'pi pi-fw pi-external-link' , routerLink: ['/overview'] },
      { label: 'Creator', icon: 'pi pi-pw pi-file', routerLink: ['/creator']}
    ]*/
    this.items = [
      { label: 'Search', routerLink: '/search'},
      { label: 'Overview', routerLink: '/overview'},
      { label: 'Creator', routerLink: '/creator/a11'}
    ]


    }
}