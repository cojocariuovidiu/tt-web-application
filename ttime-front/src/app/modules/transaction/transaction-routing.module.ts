import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { HomeComponent } from '../../components/home/home.component';

const TRANSACTION_ROUTES: Routes = [
  {
    path: 'transaction', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TRANSACTION_ROUTES)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
