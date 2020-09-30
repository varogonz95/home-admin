import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-home-form',
    templateUrl: './home-form-modal.component.html',
    styleUrls: ['./home-form-modal.component.scss'],
})
export class HomeFormModalComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    public async close() {
        return (await this.modalCtrl.getTop()).dismiss()
    }
}
