import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidepanel-view',
  templateUrl: './sidepanel-view.component.html',
  styleUrls: ['./sidepanel-view.component.css']
})
export class SidepanelViewComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'New',    icon: 'pi pi-fw pi-plus' },
      { label: 'Open',   icon: 'pi pi-fw pi-external-link' },
      { label: 'Search', icon: 'pi pi-pi pi-search'}
    ]
    }
}