import { Component, OnInit } from '@angular/core';
import { ViewUserService } from 'src/app/service/view-user.service';

@Component({
  selector: 'app-views-user',
  templateUrl: './views-user.component.html',
  styleUrls: ['./views-user.component.css']
})
export class ViewsUserComponent implements OnInit {
  dataUser:any = []
  constructor(private viewUser:ViewUserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.viewUser.getUserClass().subscribe((data:any)=>{
      for (const [key, value] of Object.entries(data)){
          this.dataUser.push(value)
      }
    })
    console.log(this.dataUser);
  }
}
