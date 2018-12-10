import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AgreementViewComponent} from "./agreement-view/agreement-view.component";
import {toCheckSumAddress} from "./share/model/routing";


const routes: Routes = [
	{
		path: "agreement/" + toCheckSumAddress(),
		component: AgreementViewComponent
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AgreementViewRoutingModule {}
