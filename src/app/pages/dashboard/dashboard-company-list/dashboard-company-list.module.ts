import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardCompanyListPageRoutingModule } from './dashboard-company-list-routing.module';
import { DashboardCompanyListPage } from './dashboard-company-list.page'
;
import { CompanyListDashboardComponent } from 'src/app/components/dashboard/company-list-dashboard/company-list-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardCompanyListPageRoutingModule
  ],
  declarations: [DashboardCompanyListPage, CompanyListDashboardComponent]
})
export class DashboardCompanyListPageModule {}
