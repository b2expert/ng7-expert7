import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { CartService } from '../../services/cart.service';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AppMatModule } from '../../app-mat.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'emp',
        loadChildren: './emp/emp-container.module#EmpContainerModule'        
      },
      {
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
      },
      {
        path: 'registerBook',
        loadChildren: './register-book-container/register-book-container.module#RegisterBookContainerModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent, 
    LayoutComponent, NavigationComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    AppMatModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CartService
  ]
})
export class DashboardModule { }
