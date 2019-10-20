import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmpRegisterComponent } from 'src/app/controls/emp-register/emp-register.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-emp-container',
  templateUrl: './emp-container.component.html',
  styleUrls: ['./emp-container.component.scss']
})
export class EmpContainerComponent implements OnInit {

  constructor(
    private _matDialog: MatDialog
  ) { }

  @ViewChild('multiUserSearch') multiUserSearchInput: ElementRef;

  userList: Array<any> = [];
  private _userList: Array<any> = [];

  ngOnInit() {
    this._getUserList().subscribe(response => {
      this.userList = response;
      this._userList = response;
    });
  }

  onInputChange() {
    console.log(this.multiUserSearchInput.nativeElement.value);
    const searchInput = this.multiUserSearchInput.nativeElement.value ?
      this.multiUserSearchInput.nativeElement.value.toLowerCase() : '';
      this.userList = this._userList.filter(u => {
        const name: string = u.name.toLowerCase();
        return name.indexOf(searchInput) > -1;
      });
  }
  onRegisterClick() {
    // Open registration component using material dialog.
    this._matDialog.open(EmpRegisterComponent, {
      width: '90%',
      height: '70%',
      autoFocus: false,
      data: {
        src: 'empContainer'
      }
    }).afterClosed().subscribe(response => {
      console.log(response);
    });
  }

  private _getUserList() {
    return of([
      {
        name: 'Biswajit Jana',
        id: 1
      },
      {
        name: 'Prasenjit Jana',
        id: 2
      },
      {
        name: 'Debasish Adhikary',
        id: 3
      },
      {
        name: 'Anup Mandal',
        id: 4
      },
      {
        name: 'Biswajit Mondal',
        id: 5
      },
      {
        name: 'Arindam Jana',
        id: 6
      }
    ])
  }
}
