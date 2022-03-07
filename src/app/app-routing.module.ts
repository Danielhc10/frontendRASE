import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { AddConsultaComponent } from './consultas/add-consulta/add-consulta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddMedicamentoComponent } from './medicamentos/add-medicamento/add-medicamento.component';
import { ListMedicinaComponent } from './medicamentos/list-medicina/list-medicina.component';
import { AgregarMedicoComponent } from './medicos/agregar-medico/agregar-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ListPacienteComponent } from './pacientes/list-paciente/list-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AddSucursalComponent } from './sucursales/add-sucursal/add-sucursal.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

const routes: Routes = [
  {path: "medicos",
    children:[
      {path: "agregarmedico", component: AgregarMedicoComponent},
      {path: "editarmedico/:ID_DOC", component: AgregarMedicoComponent},
      {path: "pacientes", component: ListPacienteComponent},
      {path: "agregarpac", component: PacientesComponent},
      {path: "**", component: MedicosComponent},
    ] 
  },
  //{path: "agregarmedico", component: AgregarMedicoComponent},
  {path: "login", component: LoginComponent},
  {path: "sucursales", children:[
    { path: "agregarsucursal", component: AddSucursalComponent },
    { path: "**", component: SucursalesComponent },
  ]},
  {path: "medicamentos", children:[
    { path: "agregarmedicamento", component: AddMedicamentoComponent },
    { path: "**", component: ListMedicinaComponent }
  ]},
  //{path: "antecedentes", component:AntecedentesComponent},
  {path: "consultas", children:[
    { path: "agregarconsultas", component: AddConsultaComponent },
    { path: "**", component: MedicosComponent }
  ]},
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
