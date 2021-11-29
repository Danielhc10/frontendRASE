import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MATERIAL ANGULAR

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { HeaderComponent } from './compartidos/header/header.component';
//import { ScrollToTopComponent } from './compartidos/scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './home/home.component';
import { AgregarMedicoComponent } from './medicos/agregar-medico/agregar-medico.component';
import { AgregarAntecedentesComponent } from './antecedentes/agregar-antecedentes/agregar-antecedentes.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    AntecedentesComponent,
    MedicosComponent,
    SucursalesComponent,
    MedicamentosComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    //ScrollToTopComponent,
    HomeComponent,
    AgregarMedicoComponent,
    AgregarAntecedentesComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
