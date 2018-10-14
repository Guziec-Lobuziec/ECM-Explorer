import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {path: "search", loadChildren: '../search-view/search-view.module#SearchViewModule'},
  {path: "overview", loadChildren: '../user-overview/user-overview.module#UserOverviewModule'},
  //{path: "creator", loadChildren: ''},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class SidePanelRoutingModule {}
