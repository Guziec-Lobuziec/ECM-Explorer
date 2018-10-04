import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { TableModule} from 'primeng/table';
import { AgreementViewComponent } from 'src/app/agreement-view/agreement-view/agreement-view.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PanelModule,
    TableModule
  ],
  exports: [
    AgreementViewComponent
  ],
  declarations: [
    AgreementViewComponent
  ]
})
export class AgreementViewModule { }
