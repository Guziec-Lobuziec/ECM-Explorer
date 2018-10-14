import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { SidepanelViewComponent } from './sidepanel-view/sidepanel-view.component';
import { SidePanelRoutingModule } from './sidepanel-routing.module';
import {MenuModule} from 'primeng/menu';


@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    SidePanelRoutingModule,
    MenuModule,
  ],
  exports: [
    SidepanelViewComponent
  ],
  declarations: [SidepanelViewComponent]
})
export class SidepanelViewModule { }
