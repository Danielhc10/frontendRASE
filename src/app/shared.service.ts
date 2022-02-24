import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicos } from './models/medicos';
import { IPacientes } from './models/pacientes';
import { ISucursales } from './models/sucursales';
import { IMedicamento } from './models/medicamentos/medicamento';

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
  updateMedico(medico: IMedicos):Observable<IMedicos>{
    return this.http.put<IMedicos>(this.APIUrl+'/Medicos', medico)
  }
  deleteMedico(ID_DOC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Medicos/'+ ID_DOC)
  }
  getMedico(ID_DOC: number):Observable<any>{
    return this.http.get(this.APIUrl+'/Medicos/'+ID_DOC)

  }


  //METODOS PARA PACIENTES
  createPaciente(paciente: IPacientes):Observable<IPacientes>{
    return this.http.post<IPacientes>(this.APIUrl+'/Pacientes', paciente)
  }
  getPacientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Pacientes');
  }
  deletePaciente(ID_PAC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Pacientes/'+ ID_PAC)
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


  //METODOS ESPECIALIDAD
  getEspecialidad():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Especialidad');
  }
}
