import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserOverviewComponent} from "./user-overview/user-overview.component";
import { ContractConfigComponent } from './contract-config/contract-config.component';


const routes: Routes = [
	{
		path: '',
		component: UserOverviewComponent
  },
	{
		path: 'config',
		component: ContractConfigComponent
	}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class UserOverviewRoutingModule {}
