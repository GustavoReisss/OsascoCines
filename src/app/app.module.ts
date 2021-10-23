import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { APP_SERVICES } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
  ],
  providers: APP_SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
