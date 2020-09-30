import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeExpensesPage } from './home-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: HomeExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeExpensesPageRoutingModule {}
