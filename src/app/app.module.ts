import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MATERIAL ANGULAR

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
//import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { HeaderComponent } from './compartidos/header/header.component';
//import { ScrollToTopComponent } from './compartidos/scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './home/home.component';
import { AgregarMedicoComponent } from './medicos/agregar-medico/agregar-medico.component';
//import { AgregarAntecedentesComponent } from './antecedentes/agregar-antecedentes/agregar-antecedentes.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';
import { SharedService } from './shared.service';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { ListPacienteComponent } from './pacientes/list-paciente/list-paciente.component';
import { AddSucursalComponent } from './sucursales/add-sucursal/add-sucursal.component';
import { EditMedicamentoComponent } from './medicamentos/edit-medicamento/edit-medicamento.component';
import { AddMedicamentoComponent } from './medicamentos/add-medicamento/add-medicamento.component';
import { ListMedicinaComponent } from './medicamentos/list-medicina/list-medicina.component';
import { ConsultaComponent } from './consultas/consulta/consulta.component';
import { AddConsultaComponent } from './consultas/add-consulta/add-consulta.component';
import { PatologicosComponent } from './antecedentes/patologicos/patologicos.component';
import { NoPatologicosComponent } from './antecedentes/no-patologicos/no-patologicos.component';
import { HeredofamComponent } from './antecedentes/heredofam/heredofam.component';
import { PsiquiatricoComponent } from './antecedentes/psiquiatrico/psiquiatrico.component';
import { ObstetricoComponent } from './antecedentes/obstetrico/obstetrico.component';
import { QuirurgicoComponent } from './antecedentes/quirurgico/quirurgico.component';
import { AlergicoComponent } from './antecedentes/alergico/alergico.component';
import { TratamientoComponent } from './antecedentes/tratamiento/tratamiento.component';


@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    //AntecedentesComponent,
    MedicosComponent,
    SucursalesComponent,
    MedicamentosComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    //ScrollToTopComponent,
    HomeComponent,
    AgregarMedicoComponent,
    //AgregarAntecedentesComponent,
    MedicosListComponent,
    EditMedicoComponent,
    ListPacienteComponent,
    AddSucursalComponent,
    EditMedicamentoComponent,
    AddMedicamentoComponent,
    ListMedicinaComponent,
    ConsultaComponent,
    AddConsultaComponent,
    PatologicosComponent,
    NoPatologicosComponent,
    HeredofamComponent,
    PsiquiatricoComponent,
    ObstetricoComponent,
    QuirurgicoComponent,
    AlergicoComponent,
    TratamientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
