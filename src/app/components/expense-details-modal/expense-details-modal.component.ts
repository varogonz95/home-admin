import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-expense-details-modal',
    templateUrl: './expense-details-modal.component.html',
    styleUrls: ['./expense-details-modal.component.scss'],
})
export class ExpenseDetailsModalComponent implements OnInit {

    @Input()
    public details: any

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    public async close() {
        return (await this.modalCtrl.getTop()).dismiss()
    }
}
