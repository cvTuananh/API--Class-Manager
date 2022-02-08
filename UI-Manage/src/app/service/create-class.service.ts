import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CreateClassService {
  url:string = "http://localhost:30/api/v1/admin/class"
  constructor(private http:HttpClient,private cookie:CookieService) { }
  createClass(name:any,limit:any,dayStudy:any,lessonStart:any,lessonEnd:any):Observable<any>{
    const headers = {'Accept':'application/json',
    'Authorization': `Bearer ${this.cookie.get('accesss-token')}`}
    return this.http.post(this.url,{name,limit,dayStudy,lessonStart,lessonEnd},{headers})
  }
}
