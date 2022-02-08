import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = "http://localhost:30/api/v1/login"
  email:string =""
  password:string=""

  constructor(private http:HttpClient) { }

  postLogin(email:any,password:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    return this.http.post(this.url,{email,password},{headers});
  }
}
