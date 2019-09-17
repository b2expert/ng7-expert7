import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EProductListComponent } from './e-product-list.component';

@NgModule({
  declarations: [EProductListComponent],
  exports: [EProductListComponent],
  imports: [
    CommonModule
  ]
})
export class EProductListModule { }
