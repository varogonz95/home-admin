import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAnalyticsPageModule } from '../home-analytics/home-analytics.module';
import { HomeContributionsPageModule } from '../home-contributions/home-contributions.module';
import { HomeExpensesPageModule } from '../home-expenses/home-expenses.module';
import { HomeMembersPageModule } from '../home-members/home-members.module';
import { HomeSettingsPageModule } from '../home-settings/home-settings.module';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'analytics',
                loadChildren: () => HomeAnalyticsPageModule
            },
            {
                path: 'expenses',
                loadChildren: () => HomeExpensesPageModule
            },
            {
                path: 'contributions',
                loadChildren: () => HomeContributionsPageModule
            },
            {
                path: 'members',
                loadChildren: () => HomeMembersPageModule
            },
            {
                path: 'settings',
                loadChildren: () => HomeSettingsPageModule
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule { }
