import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';

@Component({
  selector: 'add-transasction',
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
}
