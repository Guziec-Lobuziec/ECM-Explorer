import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementCreatorComponent } from './agreement-creator/agreement-creator.component';
import { AgreementCreatorRoutingModule } from './agreement-creator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgreementOneOneComponent } from './agreement-one-one/agreement-one-one.component';
import { AgreementOneTwoComponent } from './agreement-one-two/agreement-one-two.component';
//PrimeNG
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    AgreementCreatorRoutingModule,
    ReactiveFormsModule,
    //PrimeNG
    StepsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule
    
  ],
  exports: [ 
    AgreementCreatorComponent, 
    AgreementOneOneComponent,
    AgreementOneTwoComponent
  ],
  declarations: [ 
    AgreementCreatorComponent, 
    AgreementOneOneComponent,
    AgreementOneTwoComponent
  ]
})
export class AgreementCreatorModule { }
