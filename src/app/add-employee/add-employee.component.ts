import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: any = {};
  isEdit: boolean = false;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.employee && data.isEdit) {
      this.employee = { ...data.employee };
      this.isEdit = true;
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.http.put(`http://localhost:3000/employees/${this.employee.id}`, this.employee).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.http.post('http://localhost:3000/employees', this.employee).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
