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

  ngOnInit() {
    console.log(this.matDialogData);
  }

  closeDialog() {
    this._dialogRef.close({src: 'emp-Register'});
  }

}
