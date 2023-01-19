import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {ProduttoriComponent} from "./produttori/produttori.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PresentazioneComponent} from "./presentazione/presentazione.component";
import {ProfiloProduttoreComponent} from "./profilo-produttore/profilo-produttore.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'produttori', component: ProduttoriComponent},
  { path: 'presentazione', component: PresentazioneComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profilo', component: ProfiloProduttoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
