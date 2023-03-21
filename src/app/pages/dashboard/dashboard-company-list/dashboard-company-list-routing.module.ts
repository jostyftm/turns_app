import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardCompanyListPage } from './dashboard-company-list.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardCompanyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCompanyListPageRoutingModule {}
