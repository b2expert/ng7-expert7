import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpRegisterComponent } from './emp-register.component';

@NgModule({
  declarations: [EmpRegisterComponent],
  entryComponents: [EmpRegisterComponent],
  imports: [
    CommonModule
  ]
})
export class EmpRegisterModule { }
