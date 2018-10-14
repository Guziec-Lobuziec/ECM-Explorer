import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: "search", loadChildren: 'src/app/search-view/search-view.module#SearchViewModule'},
  {path: "overview", loadChildren: 'src/app/user-overview/user-overview.module#UserOverviewModule'},
  //{path: "creator", loadChildren: ''},
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class SidePanelRoutingModule {}