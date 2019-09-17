import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EProductListModule } from '../../../controls/e-product-list/e-product-list.module';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    EProductListModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
