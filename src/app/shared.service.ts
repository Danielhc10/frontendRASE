import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicos } from './models/medicos';
import { IPacientes } from './models/pacientes';
import { ISucursales } from './models/sucursales';
import { IMedicamento } from './models/medicamentos/medicamento';
import { IConsulta } from './models/consulta/consulta';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44306/api";
  constructor(private http:HttpClient) { }

  //METODOS PARA MEDICOS
  getMedicosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Medicos');
  }
  createMedico(medico: IMedicos):Observable<IMedicos>{
    return this.http.post<IMedicos>(this.APIUrl+'/Medicos', medico)
  }
  getMedico(ID_DOC: number){
    return this.http.get<any/* {
      NOM_DOC: string,
      AP_PAT_DOC: string,
      AP_MAT_DOC: string,
      CURP_DOC:string,
      REC_DIS: number,
      ID_ESP: number,
      CORREO_DOC: string,
      TEL_DOC: string,
      CED_P: string,
    } */>(this.APIUrl+'/Medicos/'+ ID_DOC)
  }
  deleteMedico(ID_DOC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Medicos/'+ ID_DOC)
  }
  updateMedico(ID_DOC: number, medico: IMedicos):Observable<any>{
    return this.http.put<IMedicos>(this.APIUrl+'/Medicos/'+ID_DOC, medico)

  }


  //METODOS PARA PACIENTES
  createPaciente(paciente: IPacientes):Observable<IPacientes>{
    return this.http.post<IPacientes>(this.APIUrl+'/Pacientes', paciente)
  }
  getPacientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Pacientes');
  }
  getPaciente(ID_PAC: number){
    return this.http.get<any>(this.APIUrl+'/Pacientes/'+ ID_PAC)
  }
  deletePaciente(ID_PAC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Pacientes/'+ ID_PAC)
  }
  updatePaciente(ID_PAC: number, paciente: any):Observable<any>{
    return this.http.put<IPacientes>(this.APIUrl+'/Pacientes/'+ID_PAC, paciente)

  }



  //METODOS PARA SUCURSALES
  createSucursal(sucursal: ISucursales):Observable<ISucursales>{
    return this.http.post<ISucursales>(this.APIUrl+'/Sucursales', sucursal)
  }
  getSucursalesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Sucursales');
  }
  deleteSucursal(ID_SUC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Sucursales/'+ ID_SUC)
  }
  updateSucursal(ID_SUC: number, sucural: any):Observable<any>{
    return this.http.put<ISucursales>(this.APIUrl+'/Sucursales/'+ID_SUC, sucural)

  }


  //METODOS PARA MEDICAMENTOS
  createMedicamento(medicamento: IMedicamento):Observable<IMedicamento>{
    return this.http.post<IMedicamento>(this.APIUrl+'/Medicina', medicamento)
  }
  getMedicamentos():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Medicina');
  }
  deleteMedicamentos(ID_MED: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Medicina/'+ ID_MED)
  }
  updateMedicamento(ID_MED: number, medicamento: any):Observable<any>{
    return this.http.put<IMedicamento>(this.APIUrl+'/Medicina/'+ID_MED, medicamento)

  }


  //METODOS ESPECIALIDAD
  getEspecialidad():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Especialidad');
  }


  getAtencendeteQuirurgico():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Antqui')
  }


  //METODOS PARA CONSULTAS MEDICAS
  createConsulta(consulta: IConsulta):Observable<IConsulta>{
    return this.http.post<IConsulta>(this.APIUrl+'/consulta', consulta)
  }
}
