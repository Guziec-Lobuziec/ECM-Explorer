import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { AgreementViewComponent } from 'src/app/agreement-view/agreement-view/agreement-view.component';
import { AgreementViewRoutingModule } from './agreement-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    AgreementViewRoutingModule,
    ButtonModule
  ],
  exports: [
    AgreementViewComponent
  ],
  declarations: [
    AgreementViewComponent
  ]
})
export class AgreementViewModule { }
