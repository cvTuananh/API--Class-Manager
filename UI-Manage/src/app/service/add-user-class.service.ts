import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserClassService {
  url:string = "http://localhost:30/api/v1/admin/react"
  constructor(private cookie:CookieService, private http:HttpClient) { }

  addUserClass(id:any){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
  }
  return this.http.post(`http://localhost:30/api/v1/admin/react/${id}`,requestOptions)
}
}