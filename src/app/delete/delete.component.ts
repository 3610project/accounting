
import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../transaction';
import { TransactionsService } from '../transaction.service';

@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  
  [x: string]: any;
  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;

  constructor(private _transactionsService: TransactionsService){ }
i
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
  delete(transaction: ITransaction): void {
   
    this.transactionservice.deletetransaction(transaction).subscribe();
  }










}
