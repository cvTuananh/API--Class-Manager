import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  url: string = "http://localhost:30/api/v1/class/calendars"
  constructor(private http:HttpClient, private cookie:CookieService) { }
  getCalendar():Observable<any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`
      }),
      withCredentials: true,
      mode:'no-cros'
     };
    return this.http.get(this.url, requestOptions)
  }
}
