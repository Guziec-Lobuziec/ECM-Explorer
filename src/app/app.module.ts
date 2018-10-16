import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgreementViewModule } from './agreement-view/agreement-view.module';
import { AgreementCreatorModule } from './agreement-creator/agreement-creator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgreementViewModule,
    AgreementCreatorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
