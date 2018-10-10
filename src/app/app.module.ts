import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidepanelViewModule } from './sidepanel-view/sidepanel-view.module';
import { AgreementViewModule } from './agreement-view/agreement-view.module';
import { UserOverviewModule} from './user-overview/user-overview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SidepanelViewModule,
    AgreementViewModule,
    UserOverviewModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
