import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    CarouselModule
  ],
  exports: [UserOverviewComponent],
  declarations: [UserOverviewComponent]
})
export class UserOverviewModule { }
