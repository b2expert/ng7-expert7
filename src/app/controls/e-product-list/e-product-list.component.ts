import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { EProductListService } from './e-product-list.service';

@Component({
  selector: 'app-e-product-list',
  templateUrl: './e-product-list.component.html',
  styleUrls: ['./e-product-list.component.scss'],
  providers: [EProductListService]
})
export class EProductListComponent implements OnInit, OnChanges {
  

  constructor(
    public eProductService: EProductListService
  ) { }

  @Input('dataSource') inputProductList: Array<any> = [];
  @Output() addProduct2CartEvt = new EventEmitter<any>(true);

  ngOnInit() {
  } 

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.inputProductList);
  }

  public addProductToCart(product: any) {
    this.addProduct2CartEvt.next(product);
  }

}
