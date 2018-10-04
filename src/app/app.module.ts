import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { AgreementViewModule } from './agreement-view/agreement-view.module';

@NgModule({
  declarations: [
    AppComponent,
    AgreementViewModule
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
