import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserEditPageRoutingModule } from './dashboard-user-edit-routing.module';

import { DashboardUserEditPage } from './dashboard-user-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserEditPageRoutingModule
  ],
  declarations: [DashboardUserEditPage]
})
export class DashboardUserEditPageModule {}
