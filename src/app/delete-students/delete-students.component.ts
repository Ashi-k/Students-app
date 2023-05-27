import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteStudentsComponent>,
    private ss: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
    this.ss.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}

