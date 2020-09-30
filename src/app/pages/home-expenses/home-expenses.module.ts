import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeExpensesPageRoutingModule } from './home-expenses-routing.module';

import { HomeExpensesPage } from './home-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeExpensesPageRoutingModule
  ],
  declarations: [HomeExpensesPage]
})
export class HomeExpensesPageModule {}
