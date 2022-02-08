import { Component, OnInit } from '@angular/core';
import { AdmimListRegisterService } from 'src/app/service/admim-list-register.service';
import { ResultRegisterService } from 'src/app/service/result-register.service';
import { AddUserClassService } from 'src/app/service/add-user-class.service';

@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {
  listRe:any = []
  result:string =""
  constructor(private list:AdmimListRegisterService, private resultSv:ResultRegisterService, private add:AddUserClassService) { }
  ngOnInit(): void {
    this.listRegister()
    console.log(this.result)
  }
  
  listRegister(){
    this.list.adminList().subscribe((data:any)=>{
      for(const [key, value]of Object.entries(data)){
        this.listRe.push(value);
      }
    })
  }

  acpect(id:any){
      this.result = 'accept'
      this.resultSv.sendResult(id,this.result).subscribe((data)=>{
        console.log(data);
      })
      this.add.addUserClass(id).subscribe((data)=>{})
  }
  reject(id:any){
    this.result = 'reject'
    this.resultSv.sendResult(id,this.result).subscribe((data)=>{})
  }

  
}
