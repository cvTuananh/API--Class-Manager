import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {
  url:string = "http://localhost:30/api/v1/verify-email"
  constructor(private http:HttpClient) { }
  verifyUser(otp:any){
    const headers = { 'content-type': 'application/json'}
    return this.http.post(this.url,{otp},{headers})
  }
}
