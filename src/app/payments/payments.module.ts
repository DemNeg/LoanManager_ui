import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { DeletePaymentsComponent } from './delete-payments/delete-payments.component';
import { SearchPaymentsComponent } from './search-payments/search-payments.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    ListPaymentsComponent,
    AddPaymentsComponent,
    EditPaymentsComponent,
    DeletePaymentsComponent,
    SearchPaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
