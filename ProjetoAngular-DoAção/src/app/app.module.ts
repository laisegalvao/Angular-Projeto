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
import { RespsocialComponent } from './view/respsocial/respsocial.component';
import { ComofuncionaComponent } from './view/comofunciona/comofunciona.component';
import { SobreComponent } from './view/sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    RespsocialComponent,
    ComofuncionaComponent,
    SobreComponent,
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
