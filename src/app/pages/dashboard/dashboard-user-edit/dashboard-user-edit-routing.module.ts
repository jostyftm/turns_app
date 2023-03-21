import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUserEditPage } from './dashboard-user-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardUserEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserEditPageRoutingModule {}
