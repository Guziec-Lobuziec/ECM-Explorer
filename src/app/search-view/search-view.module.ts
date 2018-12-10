import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SearchViewRoutingModule } from './search-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchViewRoutingModule,
    ReactiveFormsModule 
  ],
  exports: [SearchViewComponent],
  declarations: [SearchViewComponent, FilterPipe]
})
export class SearchViewModule { }
