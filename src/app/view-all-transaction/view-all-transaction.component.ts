import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';
import { Pipe, PipeTransform }   from '@angular/core';

@Component({
  selector: 'app-view-all-transaction',
  templateUrl: './view-all-transaction.component.html',
  styleUrls: ['./view-all-transaction.component.css']
})
export class ViewAllTransactionComponent implements OnInit {
  
  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;

  constructor(private _transactionsService: TransactionsService){ }

  ngOnInit(){
    this._transactionsService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;

      transactions.sort(function(a, b){
        return a.id-b.id
    })

    },
      error => console.log(error)
    );
  }

  onSelect(transaction: ITransaction): void {
    this.selectedTransaction = transaction;
  }



}


