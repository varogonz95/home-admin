import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeContributionsPageRoutingModule } from './home-contributions-routing.module';

import { HomeContributionsPage } from './home-contributions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeContributionsPageRoutingModule
  ],
  declarations: [HomeContributionsPage]
})
export class HomeContributionsPageModule {}
