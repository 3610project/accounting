import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';
<<<<<<< HEAD
=======
import { Pipe, PipeTransform }   from '@angular/core';
>>>>>>> 2f2a038c1dd46f0a8a3b07529b93504bdbb070d8

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

<<<<<<< HEAD


  constructor() {

   }

  ngOnInit() {
=======
  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;
  transaction: ITransaction;

  inputid = new FormControl();
  inputdate = new FormControl();
  inputaccount = new FormControl();
  inputcategory = new FormControl();
  inputvendor = new FormControl();
  inputamount = new FormControl();

  constructor(private _transactionsService: TransactionsService) { }

  ngOnInit() {
    document.getElementById("SuccessLabel").style.visibility = "hidden";
    document.getElementById("myform").style.visibility = "hidden";
  }

  GetTransaction() {

    var myid : number;

    myid = this.inputid.value;

    this._transactionsService.getTransaction(myid).subscribe(transaction => this.transaction = transaction);
    document.getElementById("myform").style.visibility = "visible";

  }

  UpdateTransaction() {
    var mydate = new Date();
    var myid : number;
    var myvendor : string;
    var myamount : number;
    var mycategory : string;
    var myaccount : string;
    myid = this.inputid.value;
    mydate = this.inputdate.value;
    myvendor = this.inputvendor.value;
    myamount = this.inputamount.value;
    mycategory = this.inputcategory.value;
    myaccount = this.inputaccount.value;
    const newTransaction : ITransaction = {id: myid, vendor: myvendor, amount: myamount, category: mycategory, transactionDate: mydate, account: myaccount};
    this._transactionsService.putTransaction(newTransaction).subscribe();
    document.getElementById("SuccessLabel").style.visibility = "visible";
>>>>>>> 2f2a038c1dd46f0a8a3b07529b93504bdbb070d8

  }



  

}

