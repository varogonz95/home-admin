import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddExpensesModalComponent } from 'src/app/components/add-expenses-modal/add-expenses-modal.component';
import { ExpenseDetailsModalComponent } from 'src/app/components/expense-details-modal/expense-details-modal.component';

@Component({
    selector: 'app-home-expenses',
    templateUrl: './home-expenses.page.html',
    styleUrls: ['./home-expenses.page.scss'],
})
export class HomeExpensesPage implements OnInit {

    public expensesSegment = "myexpenses"

    constructor(private modalCtrl: ModalController) { }
    
    ngOnInit() {
    }

    public async presentExpenseDetailsModal() {
        const modal = await this.modalCtrl.create({
            component: ExpenseDetailsModalComponent,
            componentProps: {
                details: null
            }
        })

        return await modal.present()
    }

    public async presentAddExpensesModal() {
        const modal = await this.modalCtrl.create({
            component: AddExpensesModalComponent,
            componentProps: {
                details: null
            }
        })

        return await modal.present()
    }

    public async segmentChanged(evt: CustomEvent) {
        this.expensesSegment = evt.detail.value
    }
}
