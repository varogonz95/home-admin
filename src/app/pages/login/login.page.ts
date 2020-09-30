import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private readonly provider = new auth.GoogleAuthProvider()
    
    constructor(private authModule: AngularFireAuth) {
        this.provider.setCustomParameters({ prompt: "select_account" })
    }

    ngOnInit() {
    }

    public async login() {
        return await this.authModule.signInWithRedirect(this.provider)
        // Query users Collection, and check if user already exists
        // if not, redirect to 
    }
}
