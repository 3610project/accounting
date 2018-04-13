import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  inputid = new FormControl();

  constructor(private _transactionsService: TransactionsService) { }

  ngOnInit() {
    document.getElementById("SuccessLabel").style.visibility = "hidden";
  }

  DeleteTransaction() {
    var myid : number;
    myid = this.inputid.value;
    this._transactionsService.deleteTransaction(myid).subscribe();
    document.getElementById("SuccessLabel").style.visibility = "visible";
  }

}
