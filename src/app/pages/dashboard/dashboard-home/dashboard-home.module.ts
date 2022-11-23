import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardHomePageRoutingModule } from './dashboard-home-routing.module';

import { DashboardHomePage } from './dashboard-home.page';

import { ClientHomeDashboardComponent } from './../../../components/dashboard/client-home-dashboard/client-home-dashboard.component';
import { AdminHomeDashboardComponent } from './../../../components/dashboard/admin-home-dashboard/admin-home-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardHomePageRoutingModule
  ],
  declarations: [
    DashboardHomePage,
    AdminHomeDashboardComponent,
    ClientHomeDashboardComponent
  ]
})
export class DashboardHomePageModule {}
