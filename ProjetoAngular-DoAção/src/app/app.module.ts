import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './view/services/services.component';
import { ResponsabilidadeSocialComponent } from './view/responsabilidade-social/responsabilidade-social.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    ResponsabilidadeSocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
