import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMembersPageRoutingModule } from './home-members-routing.module';

import { HomeMembersPage } from './home-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMembersPageRoutingModule
  ],
  declarations: [HomeMembersPage]
})
export class HomeMembersPageModule {}
