import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';

@Component({
  selector: 'app-add-transasction',
  templateUrl: './add-transasction.component.html',
  styleUrls: ['./add-transasction.component.css']
})
export class AddTransasctionComponent implements OnInit {

  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;

  inputid = new FormControl();

  constructor(private _transactionsService: TransactionsService) {

   }

  ngOnInit() {
  }



  AddTransaction() {
    
    var date = new Date(2018,4,1);
    var myid : number;
    myid = this.inputid.value;
    const newTransaction : ITransaction = {id: myid, vendor: "Test", amount: 0, category: "Test", transactionDate: date, account: "Test"};
    this._transactionsService.postTransaction(newTransaction)
    .subscribe(transaction => this.transactions.push(newTransaction));
  }

}

