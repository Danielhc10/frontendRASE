import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { IUser, UserResponse } from '../models/users.interface'; 
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headersJSON: HttpHeaders

  constructor(private http: HttpClient) {
    this.headersJSON = new HttpHeaders().set('Content-Type', 'application/json');
    
   }

  login(authData: IUser): Observable<any>{
    return this.http.post<UserResponse>(`${environment.httpUrl + environment.httpApi}/login`, authData, {headers: this.headersJSON})
    .pipe(
      map((res:UserResponse) => {
        console.log('Res ->', res);
      }),
      catchError((err)=>this.handlerError(err))
      )
  }
  logout(){

  }
  private readToken(){

  }
  private saveToken(){

  }
  private handlerError(err): Observable<never>{
    let errorMessage = 'Ah ocurrido un error recuperando los datos';
    if(err){
      errorMessage= `Error code: ${errorMessage}`
    }
    return throwError(errorMessage);
  }
}
