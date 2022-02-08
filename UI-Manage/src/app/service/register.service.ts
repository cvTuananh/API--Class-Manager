import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  url:string = "http://localhost:30/api/v1/register"
  constructor(private http:HttpClient) { }
  registerUser(email:any,password:any,name:any, avatar:File): Observable<any>{
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('name',name)
    const headers = {'Accept':'application/json'}
    return this.http.post(this.url,formData,{headers});
  }
}
