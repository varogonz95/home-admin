import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAnalyticsPageRoutingModule } from './home-analytics-routing.module';

import { HomeAnalyticsPage } from './home-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAnalyticsPageRoutingModule
  ],
  declarations: [HomeAnalyticsPage]
})
export class HomeAnalyticsPageModule {}
