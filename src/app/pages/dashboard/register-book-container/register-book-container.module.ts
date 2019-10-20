import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBookContainerComponent } from './register-book-container.component';
import { RegisterBookModule } from '../../../controls/register-book/register-book.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegisterBookContainerComponent
  }
];

@NgModule({
  declarations: [RegisterBookContainerComponent],
  imports: [
    CommonModule,
    RegisterBookModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterBookContainerModule { }
