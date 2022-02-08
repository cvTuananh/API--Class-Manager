import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelRegisterService {
  url: string = "http://localhost:30/api/v1/class"
  constructor( private http:HttpClient, private cookie:CookieService ) { }

  cancelRegister(id:any){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      body:{
        id:id
      }
     };
     return this.http.delete(`http://localhost:30/api/v1/class/${id}`,requestOptions)
  }
}
