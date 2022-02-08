import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChangeAvaService {
  url:string = "http://localhost:30/api/v1/profile"
  constructor(private http:HttpClient, private cookie:CookieService) { }

  updateAva(avatar:File):Observable<any> {
    const formData = new FormData();
    formData.append('avatar', avatar);
    const requestOptions = {
      headers: new HttpHeaders({
        'Accept':'multipart/form-data',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     alert('done')
    return this.http.patch(this.url,formData,requestOptions)
  }
}
