import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  public pageTitle: string = 'Account Login';
  public linkInfo: any = {};
  public link: string = '';
  ngOnInit() {
    this.pageTitle = this._activeRoute.snapshot.firstChild.data['pageTitle'];
    this.linkInfo = this._activeRoute.snapshot.firstChild.data['linkInfo'];
    
    this._changeLink();
    this._router.events.subscribe(() => {
      this.pageTitle = this._activeRoute.snapshot.firstChild.data['pageTitle'];
      this.linkInfo = this._activeRoute.snapshot.firstChild.data['linkInfo'];
      this._changeLink();
    });
  }

  private _changeLink() {
    switch (this.linkInfo.code) {
      case 'REGISTRATION':
        this.link = 'registration';
        break;
      case 'LOGIN':
        this.link = '';
        break;
    }
  }

}
