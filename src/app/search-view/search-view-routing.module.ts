import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SearchViewComponent} from "./search-view/search-view.component";


const routes: Routes = [
	{
		path: '',
		component: SearchViewComponent
  }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SearchViewRoutingModule {}
