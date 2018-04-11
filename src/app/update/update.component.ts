
import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';


@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  [x: string]: any;
  transactions: ITransaction[] = [];
  constructor(private _transactionsService: TransactionsService){ }
i
  ngOnInit(){
    this._transactionsService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    },
      error => console.log(error)
    );
  }
 update(transaction: ITransaction): void {
   
    this.transactionservice.updatetransaction(transaction).subscribe();
  }




}
