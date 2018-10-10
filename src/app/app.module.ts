import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidepanelViewModule } from './sidepanel-view/sidepanel-view.module';
import { AgreementViewModule } from './agreement-view/agreement-view.module';
import { UserOverviewModule} from './user-overview/user-overview.module';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SidepanelViewModule,
    AgreementViewModule,
    UserOverviewModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
