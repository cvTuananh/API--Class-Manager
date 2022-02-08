import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-calendar-study',
  templateUrl: './calendar-study.component.html',
  styleUrls: ['./calendar-study.component.css']
})
export class CalendarStudyComponent implements OnInit {

  constructor(private calendar:CalendarService) { }
  calendarUser:any=[]
  calendarss:any= []
  ngOnInit(): void {
    this.getCalendar();
  }
  getCalendar() {
    this.calendar.getCalendar().subscribe((data:any)=>{
    for(const [key, value] of Object.entries(data)){
      this.calendarUser.push(value)
    }
    console.log(this.calendarUser)
  }
    )}
}
