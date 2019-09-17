import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { CartService } from '../../services/cart.service';
import { NavigationComponent } from './layout/navigation/navigation.component';

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
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
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
    RouterModule.forChild(routes)
  ],
  providers: [
    CartService
  ]
})
export class DashboardModule { }
