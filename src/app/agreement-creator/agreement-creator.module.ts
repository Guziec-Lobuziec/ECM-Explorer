import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementCreatorComponent } from './agreement-creator/agreement-creator.component';
import { AgreementCreatorRoutingModule } from './agreement-creator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AgreementCreatorRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ AgreementCreatorComponent ],
  declarations: [ AgreementCreatorComponent ]
})
export class AgreementCreatorModule { }
