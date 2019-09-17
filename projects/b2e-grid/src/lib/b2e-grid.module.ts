import { NgModule } from '@angular/core';
import { B2eGridComponent } from './b2e-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [B2eGridComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [B2eGridComponent]
})
export class B2eGridModule { }
