import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;


  constructor(private _transactionsService: TransactionsService) {

   }
   ngOnInit(){
    this._transactionsService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    },
      error => console.log(error)
    );
  }

  onSelect(transaction: ITransaction): void {
    this.selectedTransaction = transaction;
  }

  delete(transaction: ITransaction):void {
    this._transactionsService.deleteTransaction(transaction);

  }


 }
 

  



