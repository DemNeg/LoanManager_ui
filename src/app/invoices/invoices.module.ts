import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';
import { EditInvoicesComponent } from './edit-invoices/edit-invoices.component';
import { DeleteInvoicesComponent } from './delete-invoices/delete-invoices.component';
import { SearchInvoicesComponent } from './search-invoices/search-invoices.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    ListInvoicesComponent,
    AddInvoicesComponent,
    EditInvoicesComponent,
    DeleteInvoicesComponent,
    SearchInvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
