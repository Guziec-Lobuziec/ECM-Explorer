import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidepanelViewComponent } from './sidepanel-view/sidepanel-view.component';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  exports: [
    SidepanelViewComponent
  ],
  declarations: [SidepanelViewComponent]
})
export class SidepanelViewModule { }
