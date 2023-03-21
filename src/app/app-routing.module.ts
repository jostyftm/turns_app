import { UserCreateDashboardComponent } from './components/users/user-create-dashboard/user-create-dashboard.component';
import { UserEditDashboardComponent } from './components/users/user-edit-dashboard/user-edit-dashboard.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard-home',
    loadChildren: () => import('./pages/dashboard/dashboard-home/dashboard-home.module').then( m => m.DashboardHomePageModule)
  },
  {
    path: 'dashboard/users',
    loadChildren: () => import('./pages/dashboard/dashboard-user-list/dashboard-user-list.module').then( m => m.DashboardUserListPageModule)
  },
  {
    path: 'dashboard/users/new',
    component: UserCreateDashboardComponent
  },
  {
    path: 'dashboard/users/:id/edit',
    component: UserEditDashboardComponent
  },
  // {
  //   path: 'dashboard-company-list',
  //   loadChildren: () => import('./pages/dashboard/dashboard-company-list/dashboard-company-list.module').then( m => m.DashboardCompanyListPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
