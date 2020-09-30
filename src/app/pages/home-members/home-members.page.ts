import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMemberModalComponent } from 'src/app/components/add-member-modal/add-member-modal.component';

@Component({
    selector: 'app-home-members',
    templateUrl: './home-members.page.html',
    styleUrls: ['./home-members.page.scss'],
})
export class HomeMembersPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    public async presentAddMemberModal() {
        const modal = await this.modalCtrl.create({
            component: AddMemberModalComponent,
            componentProps: {}
        })

        return await modal.present()
    }
}
