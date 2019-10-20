import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpRegisterComponent } from './emp-register.component';
import { FormsModule } from '@angular/forms';
import { AppMatModule } from '../../app-mat.module';

@NgModule({
  declarations: [EmpRegisterComponent],
  entryComponents: [EmpRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppMatModule
  ]
})
export class EmpRegisterModule { }
