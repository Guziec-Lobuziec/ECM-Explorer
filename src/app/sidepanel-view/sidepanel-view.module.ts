import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { SidepanelViewComponent } from './sidepanel-view/sidepanel-view.component';
import { SidePanelRoutingModule } from './sidepanel-routing.module';
import { MenuModule } from 'primeng/menu';
import { HeaderViewComponent } from './header-view/header-view.component';


@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    SidePanelRoutingModule,
    MenuModule,
  ],
  exports: [
    SidepanelViewComponent,
    HeaderViewComponent
  ],
  declarations: [ SidepanelViewComponent, HeaderViewComponent]
})
export class SidepanelViewModule { }
