import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { FolderPageModule } from './pages/folder/folder.module';
import { HomePageModule } from './pages/home/home.module';
import { HomesPageModule } from './pages/home-list/home-list.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { LoginPageModule } from './pages/login/login.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])
const redirectAuthorizedToHomeList = () => redirectLoggedInTo(['home-list'])

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-list',
        pathMatch: 'full'
    },
    /* {
        path: 'folder/:id',
        loadChildren: () => FolderPageModule
    }, */
    {
        path: 'login',
        loadChildren: () => LoginPageModule,
        ...canActivate(redirectAuthorizedToHomeList)
    },
    {
        path: 'home-list',
        loadChildren: () => HomesPageModule,
        ...canActivate(redirectUnauthorizedToLogin)
    },
    {
        path: 'home/:homeId',
        loadChildren: () => HomePageModule
    }
];

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
