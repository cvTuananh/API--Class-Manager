import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { ActivatedRoute,Router} from '@angular/router';
import { CalendarService } from '../service/calendar.service';
import { ChangeAvaService } from '../service/change-ava.service';
import { ChangePassService } from '../service/change-pass.service';

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any = {}
calendarUser:any = []
Calendars:any = {}
avatar: any
password:any

constructor(private route:ActivatedRoute, private profile:ProfileService, private calendar:CalendarService, private changeAva:ChangeAvaService,private changePass:ChangePassService) { }

ngOnInit(): void {
  this.getUser();
}
  getUser(){
    this.profile.getUser().subscribe((data:any)=>{
      this.user=data
    })
  }
  getCalendar() {
    this.calendar.getCalendar().subscribe((data:any)=>{
      this.calendarUser.push(data);
      this.Calendars=data.calendars
      console.log(data)
    })
    console.log(this.Calendars);
  }
  fileChange(element:any) {
    if(element.target.files.length >0) {
      const file = element.target.files[0]
      this.avatar = file
      console.log(this.avatar.name)
    }
  }
  updateAva() {
          this.changeAva.updateAva(this.avatar).subscribe((data:any)=>{})
      }
  updatePass(){
    this.changePass.updatePassword(this.password).subscribe((data:any)=>{})
  }
}
