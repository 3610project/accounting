import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';
import { Pipe, PipeTransform }   from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  transactions: ITransaction[] = [];
  selectedTransaction: ITransaction;
  transaction: ITransaction[];

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

    this._transactionsService.getTransaction(myid).subscribe();
    document.getElementById("myform").style.visibility = "visible";

  }

}
