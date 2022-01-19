import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44306/api";
  constructor(private http:HttpClient) { }
  getMedicosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Medicos');
  }
  addMedico(val:any){
    return this.http.post(this.APIUrl+'/Medicos',val);
  }
}
