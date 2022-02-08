import { Component, OnInit } from '@angular/core';
import { CreateClassService } from 'src/app/service/create-class.service';
import { CreateCalendarService } from 'src/app/service/create-calendar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  name:string=''
  limit:number=0
  week:string = ''
  lessonStart:string=''
  lessonEnd:string=''
  constructor(private createClass:CreateClassService, private createCalendar:CreateCalendarService, private router:Router) { }

  ngOnInit(): void {
  }
  create(){
      this.createClass.createClass(this.name,this.limit,this.week,this.lessonStart,this.lessonEnd).subscribe((data:any)=>{})
      this.router.navigate(['admin/manager'])
  }

}
