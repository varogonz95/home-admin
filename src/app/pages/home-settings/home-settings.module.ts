import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSettingsPageRoutingModule } from './home-settings-routing.module';

import { HomeSettingsPage } from './home-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSettingsPageRoutingModule
  ],
  declarations: [HomeSettingsPage]
})
export class HomeSettingsPageModule {}
