import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'add-member-modal',
    templateUrl: './add-member-modal.component.html',
    styleUrls: ['./add-member-modal.component.scss'],
})
export class AddMemberModalComponent implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    public async close() {
        const modal = await this.modalCtrl.getTop()
        return modal.dismiss()
    }
}
