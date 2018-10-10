import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgreementViewModule } from './agreement-view/agreement-view.module';
import { UserOverviewModule} from './user-overview/user-overview.module';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgreementViewModule,
    UserOverviewModule,
    CarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
