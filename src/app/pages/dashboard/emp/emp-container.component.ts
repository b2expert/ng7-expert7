import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmpRegisterComponent } from 'src/app/controls/emp-register/emp-register.component';

@Component({
  selector: 'app-emp-container',
  templateUrl: './emp-container.component.html',
  styleUrls: ['./emp-container.component.scss']
})
export class EmpContainerComponent implements OnInit {

  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onRegisterClick() {
    // Open registration component using material dialog.
    this._matDialog.open(EmpRegisterComponent, {
      width: '50%',
      data: {
        src: 'empContainer'
      }
    }).afterClosed().subscribe(response => {
      console.log(response);
    });
  }

}
