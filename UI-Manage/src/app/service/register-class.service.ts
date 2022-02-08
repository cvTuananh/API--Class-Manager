import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterClassService {
  url:string="http://localhost:30/api/v1/class"
  constructor(private cookie:CookieService, private htpp:HttpClient) { }
  registerClass(classId:any){
    const requestOptions = {
      headers: new HttpHeaders({  
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     return this.htpp.post(`http://localhost:30/api/v1/class/${classId}`,{classId},requestOptions)
  }
}
