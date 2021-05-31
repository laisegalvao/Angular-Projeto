import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { UserComponent} from './view/user/user.component';
import { AccountComponent } from './view/account/account.component';
import { DonationComponent } from './view/donation/donation.component';
import { RewardComponent } from './view/reward/reward.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component : HomePageComponent,
  },
  {
    path: 'account',
    redirectTo: 'account/user',
  },
  {
  path: 'account',
  component : AccountComponent,
  children: [
    {
      path: 'user',
      component: UserComponent,
      outlet: 'accountRoute'
    },
    {
      path: 'donation',
      component: DonationComponent,
      outlet: 'accountRoute'
    },
    {
      path: 'reward',
      component: RewardComponent,
      outlet: 'accountRoute'
    },
    {
      path: '',
      component: UserComponent,
      outlet: 'accountRoute'
     },
  ]},
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
