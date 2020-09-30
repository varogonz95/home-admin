import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeFormModalComponent } from '../../components/home-form-modal/home-form-modal.component';
import { Home } from '../../data/Home';

@Component({
    selector: 'app-homes',
    templateUrl: './home-list.page.html',
    styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {

    public title = "Mis Hogares"
    public homes: Home[] = [
        {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
        // {id: "12345", name:"Casa 5 Esquinas"},
    ]

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    public async presentCreateHomeModal() {
        const modal = await this.modalCtrl.create({
            component: HomeFormModalComponent,
            
        })

        return await modal.present()
    }

    public async closeCreateHomeModal() {
    }
}
