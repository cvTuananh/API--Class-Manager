import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = ''
  password:string = ''
  err:string=""
  constructor(private route:ActivatedRoute, private loginform:LoginService,private router:Router, private cookie:CookieService) { }
  
  ngOnInit(): void {
  }
  login(){
    try {
      this.loginform.postLogin(this.email,this.password).subscribe((data:any)=>{
        console.log(data);
        if(data.findUser.roles == 'admin'){
          this.router.navigate(['/admin'])
          this.cookie.set('accesss-token',data.token);
        }else{
          this.cookie.set('accesss-token',data.token);
          this.router.navigate(['/profile-user'])
        }
      },
      err => this.err=err.error.text
      )
    } catch (error:any) {
      console.log(1)
        if(error) {
          console.log(error.error)
        }
    }
  }
}
