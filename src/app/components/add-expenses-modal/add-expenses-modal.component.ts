import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-expenses-modal',
  templateUrl: './add-expenses-modal.component.html',
  styleUrls: ['./add-expenses-modal.component.scss'],
})
export class AddExpensesModalComponent implements OnInit {
    @Input()
    public details: any

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    public async close() {
        return (await this.modalCtrl.getTop()).dismiss()
    }
}
