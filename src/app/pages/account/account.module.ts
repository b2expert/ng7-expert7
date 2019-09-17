import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { AppMatModule } from '../../app-mat.module';

const routes: Routes = [
  {
    path: '',
    component: AccountLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        data: {
          pageTitle: 'Account Login',
          linkInfo: {
            title: 'Signup',
            code: 'REGISTRATION'
          }
        }
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          pageTitle: 'Account Registration',          
          linkInfo: {
            title: 'Login',
            code: 'LOGIN'
          }
        }
      }
    ]
  }
];
@NgModule({
  declarations: [
    AccountLayoutComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AppMatModule
  ]
})
export class AccountModule { }
