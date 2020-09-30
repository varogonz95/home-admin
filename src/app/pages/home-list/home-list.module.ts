import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomesPageRoutingModule } from './home-list-routing.module';
import { HomeListPage } from './home-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomesPageRoutingModule
    ],
    declarations: [HomeListPage]
})
export class HomesPageModule { }
