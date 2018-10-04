import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementViewComponent } from 'src/app/agreement-view/agreement-view/agreement-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AgreementViewComponent
  ],
  declarations: [
    AgreementViewModule
  ]
})
export class AgreementViewModule { }
