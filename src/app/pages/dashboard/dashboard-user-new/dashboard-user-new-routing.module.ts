import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUserNewPage } from './dashboard-user-new.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardUserNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserNewPageRoutingModule {}
