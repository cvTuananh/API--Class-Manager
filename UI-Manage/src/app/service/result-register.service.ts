import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResultRegisterService {
  constructor(private cookie:CookieService, private http:HttpClient) { }
  sendResult(id:any,result:any):Observable<any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     return this.http.patch(`http://localhost:30/api/v1/admin/react/${id}`,{result},requestOptions);
  }
}
