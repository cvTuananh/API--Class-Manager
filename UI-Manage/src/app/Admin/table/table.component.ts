import { Component, OnInit } from '@angular/core';
import { ShowClassService } from 'src/app/service/show-class.service';
import { EditClassService } from 'src/app/service/edit-class.service';
import { DeleteClassService } from 'src/app/service/delete-class.service';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private listClass:ShowClassService, private editClass:EditClassService,private deleteClass:DeleteClassService) {
   }
  class:any=[]
  name:any=[]
  limit:any
  id:any
  ngOnInit(): void {
    this.listClasses();
  }
  listClasses(){
    this.listClass.showClass().subscribe((data:any)=>{
      for(const [key, value] of Object.entries(data)){
        this.class.push(value)
      }
    })
  }
  classEdit(){
    this.editClass.editClass(this.id,this.name,this.limit).subscribe((data:any)=>{})
  }
  classDelete(id:any){
    this.deleteClass.deleteClass(id).subscribe((data:any)=>{
    })
    // window.location.reload();
  }
  openCanvas(id:any){
    this.id=id
  }
}
