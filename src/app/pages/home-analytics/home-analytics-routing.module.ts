import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAnalyticsPage } from './home-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAnalyticsPageRoutingModule {}
