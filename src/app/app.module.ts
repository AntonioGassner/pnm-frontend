import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './basic/navbar/navbar.component';
import { FooterComponent } from './basic/footer/footer.component';
import { ProduttoriComponent } from './produttori/produttori.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProduttoriApiModule} from "../../libs/api/produttori-service/src/lib";
import { BASE_PATH } from 'libs/api/produttori-service/src/lib';
import {WhoareComponent} from "./whoare/whoare.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ProduttoriComponent,
    WhoareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ProduttoriApiModule,
  ],
  providers: [
    {
      provide: BASE_PATH, useValue: 'http://localhost:8080'
    }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
