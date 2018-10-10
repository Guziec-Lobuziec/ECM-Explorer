import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SidepanelViewComponent} from "./sidepanel-view/sidepanel-view.component" ;

const routes: Routes = [
  {path: "search", loadChildren: ''},
  {path: "overview", loadChildren: 'app/user-overview/user-overview.module#UserOverviewModule'},
  {path: "creator", loadChildren: ''},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SidePanelRoutingModule {}