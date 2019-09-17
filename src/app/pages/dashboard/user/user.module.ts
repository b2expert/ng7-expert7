import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { B2eGridModule } from 'projects/b2e-grid/src/public_api';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    B2eGridModule
  ]
})
export class UserModule { }
