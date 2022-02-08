
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
url:string = "http://localhost:30/api/v1/register"
email:string =""
password:string =''
name:string=''
avatar: any
constructor(private register:RegisterService, private cookie:CookieService, private router:Router, private http:HttpClient) {
  }
ngOnInit(): void {
}
fileChange(element:any) {
  if(element.target.files.length >0) {
    const file = element.target.files[0]
    this.avatar = file
  }
}
postRegister(){
  this.register.registerUser(this.email,this.password,this.name,this.avatar).subscribe((data:any)=>{})
      // this.router.navigate(['/verify-email'])
  }
}
