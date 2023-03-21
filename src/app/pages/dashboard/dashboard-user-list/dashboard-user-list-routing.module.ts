import { UserCreateDashboardComponent } from './../../../components/users/user-create-dashboard/user-create-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUserListPage } from './dashboard-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserListPageRoutingModule {}
