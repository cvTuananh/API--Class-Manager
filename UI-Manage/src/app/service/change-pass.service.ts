import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {
  url:string = "http://localhost:30/api/v1/profile/password"
  constructor(private http:HttpClient, private cookie:CookieService) { }
  updatePassword(password:any){
    const requestOptions = {
      headers: new HttpHeaders({
        'Accept':'multipart/form-data',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     alert('done')
     return this.http.patch(this.url,{password},requestOptions)
  }
}
