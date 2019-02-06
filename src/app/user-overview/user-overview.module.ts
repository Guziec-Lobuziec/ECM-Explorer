import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { UserOverviewRoutingModule } from './user-overview-routing.module';
import { ContractConfigComponent } from './contract-config/contract-config.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    CarouselModule,
    ReactiveFormsModule,
    UserOverviewRoutingModule
  ],
  exports: [UserOverviewComponent, ContractConfigComponent],
  declarations: [UserOverviewComponent, ContractConfigComponent]
})
export class UserOverviewModule { }
