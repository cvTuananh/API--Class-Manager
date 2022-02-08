import { Component, OnInit } from '@angular/core';
import { UserShowRegisterService } from 'src/app/service/user-show-register.service';
import { CancelRegisterService } from 'src/app/service/cancel-register.service';
@Component({
  selector: 'app-show-registered',
  templateUrl: './show-registered.component.html',
  styleUrls: ['./show-registered.component.css']
})
export class ShowRegisteredComponent implements OnInit {
  listRegister:any []=[]
  id:any
  constructor(private userRegister:UserShowRegisterService, private cancel:CancelRegisterService) { }

  ngOnInit(): void {
    this.showListRegister()
  }
  showListRegister(){
    this.userRegister.showRegistered().subscribe((data:any)=>{
      console.log(data)
      for(const [key, value] of Object.entries(data)){
        this.listRegister.push(value);
      }
    })
  }
  getId(id:any){
    this.cancleClass(id);
  }

  cancleClass(id:any){
    this.cancel.cancelRegister(id).subscribe((data:any)=>{})
    console.log(data)
    
    window.location.reload();
  }

}
