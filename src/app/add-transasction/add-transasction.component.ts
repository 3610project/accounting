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
  inputdate = new FormControl();
  inputaccount = new FormControl();
  inputcategory = new FormControl();
  inputvendor = new FormControl();
  inputamount = new FormControl();

  constructor(private _transactionsService: TransactionsService) {

   }

  ngOnInit() {
    document.getElementById("SuccessLabel").style.visibility = "hidden";
    this._transactionsService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;

      transactions.sort(function(a, b){
        return a.id-b.id
    })

    },
      error => console.log(error)
    );
  }

  GetLength() {
    let mylength = 0;
    mylength = this.transactions.length + 1;
    return mylength;
  }

  AddTransaction() {
    
    var mydate = new Date();
    var myid : number;
    var myvendor : string;
    var myamount : number;
    var mycategory : string;
    var myaccount : string;

    if(this.inputid.value != null) {
      myid = this.inputid.value;
    }
    else {
      myid =this.GetLength();
    }

    mydate = this.inputdate.value;
    myvendor = this.inputvendor.value;
    myamount = this.inputamount.value;
    mycategory = this.inputcategory.value;
    myaccount = this.inputaccount.value;
    const newTransaction : ITransaction = {id: myid, vendor: myvendor, amount: myamount, category: mycategory, transactionDate: mydate, account: myaccount};
    this._transactionsService.postTransaction(newTransaction)
    .subscribe(transaction => this.transactions.push(newTransaction));
    document.getElementById("SuccessLabel").style.visibility = "visible";
  }

}

