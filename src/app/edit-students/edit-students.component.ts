import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from '../students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit{

  studentRecords:Students ={
    id:0,
    name:'',
    course:'',
    mobile:'',
    email:'',
    location:''

  }

  constructor(private ss:StudentsService,private route:ActivatedRoute, 
    private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id= Number(params.get('id'))
      this.getbyId(id)
    })
  }
  getbyId(id:number){
    this.ss.getbyid(id).subscribe((data)=>{
      this.studentRecords=data;
    })
  }
  updateRecords(){
    this.ss.update(this.studentRecords).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
