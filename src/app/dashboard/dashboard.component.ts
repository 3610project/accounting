import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../view-all-transaction/transaction';
import { TransactionsService } from '../view-all-transaction/transaction.service';
import { Pipe, PipeTransform }   from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  transactions: ITransaction[] = [];

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

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].amount) {
            total += this.transactions[i].amount;
        }
    }
    return total;
}

}
