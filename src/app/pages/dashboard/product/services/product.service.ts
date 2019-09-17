import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HttpHelperService } from '../../../../services/http-helper.service';
import { PRODUCT_MOCK_LIST } from '../mocks';
import { CartService } from '../../../../services/cart.service';

@Injectable()
export class ProductService {
    constructor(
        private _httpHelper: HttpHelperService,
        private _cartService: CartService
    ) { }

    public productList: Array<any> = [];

    public getProductList() {
        return of(PRODUCT_MOCK_LIST)
            .pipe(delay(1000))
            .subscribe(response => {
                this.productList = response;
            });
    }

    public addProductToCart(product: any) {
        this._cartService.addProductToCart(product);
    }
}