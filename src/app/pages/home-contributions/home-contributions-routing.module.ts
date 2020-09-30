import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContributionsPage } from './home-contributions.page';

const routes: Routes = [
  {
    path: '',
    component: HomeContributionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeContributionsPageRoutingModule {}
