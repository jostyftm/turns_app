import { UserListDashboardComponent } from './../../../components/dashboard/user-list-dashboard/user-list-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserListPageRoutingModule } from './dashboard-user-list-routing.module';

import { DashboardUserListPage } from './dashboard-user-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserListPageRoutingModule,
  ],
  declarations: [DashboardUserListPage, UserListDashboardComponent]
})
export class DashboardUserListPageModule {}
