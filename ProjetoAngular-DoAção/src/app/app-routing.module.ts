import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResponsabilidadeSocialComponent } from './view/responsabilidade-social/responsabilidade-social.component'
import { ServicesComponent } from './view/services/services.component'

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},

  {path:'home',component:HomePageComponent},

  { path: 'responsabilidadeSocial', component: ResponsabilidadeSocialComponent },

  {path: 'services', component: ServicesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
