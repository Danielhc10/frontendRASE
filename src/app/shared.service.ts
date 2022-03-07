import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicos } from './models/medicos';
import { IPacientes } from './models/pacientes';
import { ISucursales } from './models/sucursales';
import { IMedicamento } from './models/medicamentos/medicamento';
import { IConsulta } from './models/consulta/consulta';
import { Antpat } from './models/antpat';

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
  getMedico(ID_DOC: number):Observable<IMedicos>{
    return this.http.get<IMedicos>(this.APIUrl+'/Medicos/'+ ID_DOC)
  }
  deleteMedico(ID_DOC: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/Medicos/'+ ID_DOC)
  }
  updateMedico(ID_DOC: number, medicos: any):Observable<any>{
    return this.http.get<IMedicos>(this.APIUrl+'/Medicos/'+ID_DOC, medicos)

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


  //METODOS PARA CONSULTAS MEDICAS
  createConsulta(consulta: IConsulta):Observable<IConsulta>{
    return this.http.post<IConsulta>(this.APIUrl+'/consulta', consulta)
  }

  //METODOS PARA ANT PATOLOGICOS
  createAntPat(antpat:Antpat):Observable<Antpat>{
    return this.http.post<Antpat>(this.APIUrl+'/Antpat',antpat)
  }
  getAntecedentes():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/c_ant')
  }

}
