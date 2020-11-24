import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guardss/auth.guard';
// import { AuthGuardLogin } from './guardss/auth.guards-login';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ]},
  { path: 'perfil', component: PerfilComponent, canActivate: [ AuthGuard ]},
  { path: 'registro', component: RegistroComponent},
  { path: 'login'   , component: LoginComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
