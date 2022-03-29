import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicos } from './models/medicos';
import { IPacientes } from './models/pacientes';
import { ISucursales } from './models/sucursales';
import { IMedicamento } from './models/medicamentos/medicamento';
import { IConsulta } from './models/consulta/consulta';
import { Antpat } from './models/antecedentes/antpat';
import { Catant } from './models/antecedentes/catant';
import { Antnpat } from './models/antecedentes/antnpat';
import { Anther } from './models/antecedentes/anther';
import { Antpsi } from './models/antecedentes/antpsi';
import { Antobs } from './models/antecedentes/antobs';
import { Antqui } from './models/antecedentes/antqui';
import { Antaler } from './models/antecedentes/antaler';
import { Tratact } from './models/antecedentes/tratact';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44306/api";
readonly APItercero= "https://api.kabik.mx:443/WebService/soap.php/"
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
  getConsultaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/consulta');
  }
  deleteConsulta(ID_CON: number): Observable<any>{
    return this.http.delete(this.APIUrl+'/consulta/'+ ID_CON)
  }

  //METODOS PARA CATALAGO DE ANTECEDENTES
  createCatalogoAnt(ant:Catant):Observable<Catant>{
    return this.http.post<Catant>(this.APIUrl+'/CatAnt',ant)
  }
  getCatalalogoAnt():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CatAnt')
  }
  deleteCatalogoAnt(ID_ANT:number):Observable<any>{
    return this.http.delete(this.APIUrl+'/CatAnt/'+ID_ANT)
  }
  updateCatalagoAnt(ID_ANT: number, N_ANT:any):Observable<any>{
    return this.http.put<Catant>(this.APIUrl+'/CatAnt/'+ID_ANT, N_ANT)
  }

  //METODOS PARA ANTECEDENTES PATOLOGICOS
  createAntPat(antpat:Antpat):Observable<Antpat>{
    return this.http.post<Antpat>(this.APIUrl+'/Antpat',antpat)
  }
  getAntPat(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/Antpat/'+ID_PAC)
  }
  updateAntPat(ID_PAC:number,AntPat:any):Observable<any>{
    return this.http.put<Antpat>(this.APIUrl+'/AntPat/'+ID_PAC,AntPat)
  }

  //METODO DE ANTECEDENTE NO PATOLOGICOS
  createAntNPat(antnpat:Antnpat):Observable<Antnpat>{
    return this.http.post<Antnpat>(this.APIUrl+'/AntNPat',antnpat)
  }
  getAntNPat(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntNPat/'+ID_PAC)
  }
  updateAntNPat(ID_PAC:number,AntNPat:any):Observable<any>{
    return this.http.put<Antnpat>(this.APIUrl+'/AntNPat/'+ID_PAC,AntNPat)
  }

  //METODO DE ANTECEDENTES HEREDOFAM
  createAntHer(anther:Anther):Observable<Anther>{
    return this.http.post<Anther>(this.APIUrl+'/AntHeredo',anther)
  }
  getAntHer(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntHeredo/'+ID_PAC)
  }
  updateAntHer(ID_PAC:number,AntHerdo:any):Observable<any>{
    return this.http.put<Anther>(this.APIUrl+'/AntHeredo/'+ID_PAC,AntHerdo)
  }

  //METODO DE ANTECEDENTES PSIQUIATRICOS
  createAntPsi(antpsi:Antpsi):Observable<Antpsi>{
    return this.http.post<Antpsi>(this.APIUrl+'/AntPsi',antpsi)
  }
  getAntPsi(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntPsi/'+ID_PAC)
  }
  updateAntPsi(ID_PAC:number,antPsi:any):Observable<any>{
    return this.http.put<Antpsi>(this.APIUrl+'/AntPsi/'+ID_PAC,antPsi)
  }

  //METODO DE ANTECEDENTES OBSTETRICOS
  createAntObs(antobs:Antobs):Observable<Antobs>{
    return this.http.post<Antobs>(this.APIUrl+'/AntObs',antobs)
  }
  getAntObs(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntObs/'+ID_PAC)
  }
  updateAntObs(ID_PAC:number,antobs:any):Observable<any>{
    return this.http.put<Antobs>(this.APIUrl+'/AntObs/'+ID_PAC, antobs)
  }
  //METODO DE ANTECEDENTES QUIRURGICOS
  createAntQui(antqui:Antqui):Observable<Antqui>{
    return this.http.post<Antqui>(this.APIUrl+'/AntQui',antqui)
  }
  getAntQui(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntQui/'+ID_PAC)
  }
  updateAntQui(ID_PAC:number,antqui:any):Observable<any>{
    return this.http.put<Antqui>(this.APIUrl+'/AntQui/'+ID_PAC,antqui)
  }
  //METODO DE ANTECEDENTES ALERGICOS
  createAntAler(antaler:Antaler):Observable<Antaler>{
    return this.http.post<Antaler>(this.APIUrl+'/AntAler',antaler)
  }
  getAntAler(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/AntAlar/'+ID_PAC)
  }
  updateAntAler(ID_PAC:number, antaler:any):Observable<any>{
    return this.http.put<Antaler>(this.APIUrl+'/AntAler/'+ID_PAC, antaler)
  }
  //METODO DE TRATAMIENTO ACTIVOS
  createTratAct(trat:Tratact):Observable<Tratact>{
    return this.http.post<Tratact>(this.APIUrl+'/TratActiv',trat)
  }
  getTratActivo(ID_PAC:number){
    return this.http.get<any>(this.APIUrl+'/TratActivo/'+ID_PAC)
  }
  updateTratActivo(ID_PAC:number, tratact:Tratact):Observable<any>{
    return this.http.put<Tratact>(this.APIUrl+'/TratActivo/'+ID_PAC,tratact)
  }
}

