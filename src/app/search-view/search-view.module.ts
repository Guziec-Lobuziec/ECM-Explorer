import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SearchViewRoutingModule } from './search-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchViewRoutingModule    
  ],
  declarations: [SearchViewComponent, FilterPipe]
})
export class SearchViewModule { }
