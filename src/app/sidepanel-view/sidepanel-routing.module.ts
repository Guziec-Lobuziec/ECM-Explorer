import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: "search", loadChildren: ''},
  {path: "overview", loadChildren: 'app/user-overview/user-overview.module#UserOverviewModule'},
  {path: "creator", loadChildren: ''},
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class SidePanelRoutingModule {}