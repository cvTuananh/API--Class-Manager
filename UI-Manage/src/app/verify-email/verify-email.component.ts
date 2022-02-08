import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyEmailService } from '../service/verify-email.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  OTP:string=""
  constructor(private svVerify:VerifyEmailService, private router:Router) { }

  ngOnInit(): void {
  }

  verifyEmail(){
    this.svVerify.verifyUser(this.OTP).subscribe((data:any)=>{})
    this.router.navigate(['/login'])
  }


}
