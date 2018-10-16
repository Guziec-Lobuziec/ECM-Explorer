import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementCreatorComponent } from './agreement-creator/agreement-creator.component';
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

//PrimeNG
import { ListboxModule} from 'primeng/listbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    //PrimeNG
    ListboxModule,
    ScrollPanelModule,
    InputTextModule,
    CalendarModule,
    CardModule,
    InputTextareaModule,
    InputMaskModule,
    KeyFilterModule,
    ButtonModule,
    DropdownModule,
    FieldsetModule

  ],
  exports: [
    AgreementCreatorComponent
  ],
  declarations: [
    AgreementCreatorComponent
  ]
})
export class AgreementCreatorModule { }
