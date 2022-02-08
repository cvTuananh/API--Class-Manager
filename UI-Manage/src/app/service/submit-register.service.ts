import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitRegisterService {
  url:string = "http://localhost:30/api/v1/list-register-class"
  constructor(private http:HttpClient,private cookie:CookieService) { }

  getRegister(): Observable <any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     return this.http.get(this.url,requestOptions);
  }
}
