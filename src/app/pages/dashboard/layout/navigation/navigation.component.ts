import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppSessionService } from '../../../../services/session.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _sessionService: AppSessionService,
    private _router: Router,
    public cartService: CartService
  ) {
    this.cartService.cartList.subscribe(res => {
      this.cartList = res;
    });
  }

  public cartList: Array<any> = [];

  ngOnInit() {
  }

  public logMeOut() {
    this._sessionService.removeSession('cu');
    this._router.navigate(['']);
  }

}
