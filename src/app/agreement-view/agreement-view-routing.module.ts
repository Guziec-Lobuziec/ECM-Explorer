import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AgreementViewComponent} from "./agreement-view/agreement-view.component";


const routes: Routes = [
	{
		path: ":address",
		component: AgreementViewComponent
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AgreementViewRoutingModule {}
