import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from '../../../services/http-helper.service';
import { END_POINTS } from '../../../constants/endpoints.constant';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AppSessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _httpHelper: HttpHelperService,
    private _route: Router,
    private _sessionService: AppSessionService
  ) { }

  public login = {
    userName: '',
    password: ''
  }
  public isSending: boolean = false;

  ngOnInit() {
  }

  public onLoginFormSubmit() {
    this.isSending = true;
    this._httpHelper.postData(END_POINTS.login, this.login)
      .subscribe(response => {
        if (response && response.data && response.data.Token) {
          // Set the token in the browser local stoage/ session storage
          this._sessionService.setDataToSession('cu', response.data);
          this._route.navigate(['app/dashboard']);
        }
        this.isSending = false;
      });
  }
}
