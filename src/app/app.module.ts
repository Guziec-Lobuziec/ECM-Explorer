import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgreementViewModule } from './agreement-view/agreement-view.module';
import { AgreementCreatorModule } from './agreement-creator/agreement-creator.module';
import { SidepanelViewModule } from './sidepanel-view/sidepanel-view.module';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgreementViewModule,
    AgreementCreatorModule,
    SidepanelViewModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
