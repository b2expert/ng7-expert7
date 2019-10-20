import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss']
})
export class EmpRegisterComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialogData: any,
    private _dialogRef: MatDialogRef<EmpRegisterComponent>
  ) { }

  public newEmp = null;
  public emailRegex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  ngOnInit() {
    this._initModel();
  }

  onFormSubmit() {
    console.log(this.newEmp);
  };

  closeDialog() {
    this._dialogRef.close({ src: 'emp-Register' });
  }

  addMember() {
    this.newEmp.members.push({
      name: '',
      email: '',
      phone: '',
      dob: ''
    });
  }

  deleteMember(member: any) {
    const memeberIndex = this.newEmp.members.indexOf(member);
    this.newEmp.members.splice(memeberIndex, 1);
  }

  onReset() {
    // Reset the view model
    this._initModel();
  }

  private _initModel() {
    this.newEmp = {
      name: '',
      email: '',
      phone: '',
      dob: '',
      members: []
    };
  }
}
