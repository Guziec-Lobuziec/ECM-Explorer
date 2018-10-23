import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AgreementCreatorComponent } from "./agreement-creator/agreement-creator.component";

const routes: Routes = [
  {
    path: '',
    component: AgreementCreatorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementCreatorRoutingModule { }
