import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AgreementCreatorComponent } from "./agreement-creator/agreement-creator.component";
import { AgreementOneOneComponent } from './agreement-one-one/agreement-one-one.component';
import { AgreementOneTwoComponent } from './agreement-one-two/agreement-one-two.component';

const routes: Routes = [
  {
    path: 'a11', 
    component: AgreementOneOneComponent
  },
  {
    path: 'a12', 
    component: AgreementOneTwoComponent
  }, 
  {
    path: '',
    component: AgreementCreatorComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementCreatorRoutingModule { }