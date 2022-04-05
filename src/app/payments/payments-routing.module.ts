import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { PaymentsComponent } from './payments.component';
import { SearchPaymentsComponent } from './search-payments/search-payments.component';

const routes: Routes = [
  { path: '', component: ListPaymentsComponent },
  { path: 'add', component: AddPaymentsComponent },
  { path: 'edit/:id', component: EditPaymentsComponent },
  { path: 'delete/:id', component: EditPaymentsComponent },
  { path: 'search', component: SearchPaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
