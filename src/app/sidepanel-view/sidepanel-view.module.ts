import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { SidepanelViewComponent } from './sidepanel-view/sidepanel-view.component';

@NgModule({
  imports: [
    CommonModule,
    PanelModule
  ],
  exports: [
    SidepanelViewComponent
  ],
  declarations: [SidepanelViewComponent]
})
export class SidepanelViewModule { }
