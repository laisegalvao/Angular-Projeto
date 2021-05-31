import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from './@angular/plataform-browser/animations';
import { NavbarComponent } from './view/navbar/navbar.component';
import { FooterComponent } from './view/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { AccountSubheaderComponent } from './account-subheader/account-subheader.component';
import { UserComponent } from './view/user/user.component';
import { AccountComponent } from './view/account/account.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HomePageComponent } from './view/home-page/home-page.component';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { UserHeadComponent } from './view/user-head/user-head.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DonationReadComponent } from './view/donation-head/donation-head.component';
import { DonationComponent } from './view/donation/donation.component';
import { MatButtonModule } from '@angular/material/button';
import { RewardComponent } from './view/reward/reward.component';
import { RewardReadComponent } from './view/reward-head/reward-head.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';








@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    AccountComponent,
    AccountSubheaderComponent,
    AccountSidebarComponent,
    UserComponent,
    UserHeadComponent,
    DonationReadComponent,
    DonationComponent,
    RewardComponent,
    RewardReadComponent,
  ]
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    AngularStickyThingsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ModalModule.forRoot(),
  ],
providers: [{
  provide: LocationStrategy,
  useClass: HashLocationStrategy
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
