import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgreementViewModule } from './agreement-view/agreement-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgreementViewModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
