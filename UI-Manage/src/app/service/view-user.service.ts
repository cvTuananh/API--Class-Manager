import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ViewUserService {
  url:string = "http://localhost:30/api/v1/admin/views-users"
  constructor(private cookie:CookieService, private http:HttpClient) { }
  getUserClass(): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
  }
    return this.http.get(this.url,requestOptions)
  }
}
