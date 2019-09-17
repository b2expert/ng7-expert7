import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
    constructor() {}

    private _notifyCartList: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
    private _cartList: Array<any> = [];

    get cartList() {
        return this._notifyCartList.asObservable();
    }
    set setCartList(list: Array<any>) {
        this._notifyCartList.next(list);
    }

    public addProductToCart(product: any) { 
        const foundProduct = this._cartList.find(item => item.id === product.id);
        if (!foundProduct) {
            this._cartList.push(product);
            this.setCartList = this._cartList;
            window.alert(`Product ${product.title} is added to cart`);
        } else {
            window.alert(`Product ${foundProduct.title} already added to cart`);
        }
    }
}