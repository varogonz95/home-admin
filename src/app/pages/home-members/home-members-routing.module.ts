import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMembersPage } from './home-members.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMembersPageRoutingModule {}
