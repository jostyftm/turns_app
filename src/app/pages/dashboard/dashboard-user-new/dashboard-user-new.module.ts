import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserNewPageRoutingModule } from './dashboard-user-new-routing.module';

import { DashboardUserNewPage } from './dashboard-user-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserNewPageRoutingModule
  ],
  declarations: [DashboardUserNewPage]
})
export class DashboardUserNewPageModule {}
