import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchViewRoutingModule } from './search-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchViewRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SearchViewComponent],
  declarations: [SearchViewComponent]
})
export class SearchViewModule { }
