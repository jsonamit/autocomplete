import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleMapsModule } from 'google-maps-angular2';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule.forRoot({
      url: '' // give here google maps places api key
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
