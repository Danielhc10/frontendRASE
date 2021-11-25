import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

const routes: Routes = [
  {path: "medicos", component: MedicosComponent},
  {path: "login", component: LoginComponent},
  {path: "sucursales", component:SucursalesComponent},
  {path: "medicamentos", component:MedicosComponent},
  {path: "antecedentes", component:AntecedentesComponent},
  {path: "pacientes", component: PacientesComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: "enabled",
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
