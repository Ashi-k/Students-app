import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';

const routes: Routes = [{
  path:'',component:DashboardComponent
},
{
  path:'add-students',component:AddStudentsComponent
},
{
  path:'edit-students/:id',component:EditStudentsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
