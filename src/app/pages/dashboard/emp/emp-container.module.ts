import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpContainerComponent } from './emp-container.component';
import { Routes, RouterModule } from '@angular/router';
import { AppMatModule } from '../../../app-mat.module';
import { EmpRegisterModule } from '../../../controls/emp-register/emp-register.module';

const routes: Routes = [
  {
    path: '',
    component: EmpContainerComponent
  }
];
@NgModule({
  declarations: [
    EmpContainerComponent
  ],
  imports: [
    CommonModule,
    AppMatModule,
    EmpRegisterModule,
    RouterModule.forChild(routes)
  ]
})
export class EmpContainerModule { }
