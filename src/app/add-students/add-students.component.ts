import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from '../students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  studentRecords:Students ={
    id:0,
    name:'',
    course:'',
    mobile:'',
    email:'',
    location:''

  }
  constructor(private ss:StudentsService, private router:Router){}

  ngOnInit(): void {
    
  }
  addRecords(){
    this.ss.create(this.studentRecords).subscribe((data)=>{
      this.router.navigate(["/"])
    })
  }

}
