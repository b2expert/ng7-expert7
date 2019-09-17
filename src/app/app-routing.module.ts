import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/account',
    pathMatch: 'full'
  },
  {
    path: 'app/account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'app/dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
