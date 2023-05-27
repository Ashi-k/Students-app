import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentsComponent } from '../delete-students/delete-students.component';
import { Students } from '../students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allStudents!:Students[]

  displayedColumns: string[] = ['id', 'name', 'course', 'mobile','email','location','action'];
  constructor(private student:StudentsService, public dialog: MatDialog) {}

  ngOnInit():void{
    this.getAllStudents();
  }

  getAllStudents(){
   this.student.getAll().subscribe((data)=>{
    this.allStudents = data ;
    console.log(this.allStudents)
   })
  }
openDeleteModel(id:number){
  const deleteconfirm = this.dialog.open(DeleteStudentsComponent,{
    width:'350px',
    data:{id}
   })
   deleteconfirm.afterClosed().subscribe((result)=>{
      if(result){
        this.allStudents= this.allStudents.filter((_)=>_.id !==id);
      }
   })
}

}
