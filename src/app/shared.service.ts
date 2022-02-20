import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicos } from './models/medicos';
import { IPacientes } from './models/pacientes';
import { ISucursales } from './models/sucursales';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44306/api";
  constructor(private http:HttpClient) { }
  getMedicosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Medicos');
  }
  createMedico(medico: IMedicos):Observable<IMedicos>{
    return this.http.post<IMedicos>(this.APIUrl+'/Medicos', medico)
  }
  updateMedico(val:any){
    return this.http.put(this.APIUrl+'/Medicos',val);
  }
  createPaciente(paciente: IPacientes):Observable<IPacientes>{
    return this.http.post<IPacientes>(this.APIUrl+'/Pacientes', paciente)
  }
  getPacientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Pacientes');
  }
  createSucursal(sucursal: ISucursales):Observable<ISucursales>{
    return this.http.post<ISucursales>(this.APIUrl+'/Sucursales', sucursal)
  }
  getSucursalesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Sucursales');
  }
}
