import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { ComofuncionaComponent } from './view/comofunciona/comofunciona.component';
import { RespsocialComponent } from './view/respsocial/respsocial.component';
import { ServicesComponent } from './view/services/services.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},

  {path:'home',component:HomePageComponent},

  {path: 'sobre', component: SobreComponent},

  {path: 'comofunciona', component: ComofuncionaComponent},

  { path: 'respsocial', component: RespsocialComponent },

  {path: 'services', component: ServicesComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
