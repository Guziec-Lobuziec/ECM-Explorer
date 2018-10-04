import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { AgreementViewComponent } from './agreement-view/agreement-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AgreementViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
