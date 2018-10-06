import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidepanelViewModule } from './sidepanel-view/sidepanel-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SidepanelViewModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
