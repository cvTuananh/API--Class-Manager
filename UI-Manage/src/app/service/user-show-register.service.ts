import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserShowRegisterService {
  url:string="http://localhost:30/api/v1/class/registered-class"
  constructor(private cookie:CookieService, private htpp:HttpClient) { }
  showRegistered():Observable<any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     return this.htpp.get(this.url,requestOptions)
  }
}
