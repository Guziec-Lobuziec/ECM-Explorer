import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchViewRoutingModule } from './search-view-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchViewRoutingModule,
    ReactiveFormsModule,
    DataViewModule,
    TableModule
  ],
  exports: [SearchViewComponent],
  declarations: [SearchViewComponent]
})
export class SearchViewModule { }
