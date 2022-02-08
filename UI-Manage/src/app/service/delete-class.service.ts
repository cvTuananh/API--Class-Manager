import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteClassService {

  constructor(private http:HttpClient, private cookie:CookieService) { }
  url:string = "http://localhost:30/api/v1/admin/class"
  deleteClass(id:any):Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.cookie.get('accesss-token')}`
      }),
      body:{
        id:id
      }
    }
    
     return this.http.delete(`http://localhost:30/api/v1/admin/class/${id}`,options)
  }
}
