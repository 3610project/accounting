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
    var total : number;
    total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].amount) {
            total += this.transactions[i].amount;
        }
    }
    return total;
  }

  getTodayDate() {
    var today = new Date;
    return today;
  }

  getFoodTotal() {
    var total : number;
    total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].category.toUpperCase() === "FOOD") {
          total += this.transactions[i].amount;
      }
    }
    return total;
  }

  getGroceryTotal() {
    var total : number;
    total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].category.toUpperCase() === "GROCERY") {
          total += this.transactions[i].amount;
      }
    }
    return total;
  }

  getMerchandiseTotal() {
    var total : number;
    total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].category.toUpperCase() === "MERCHANDISE") {
          total += this.transactions[i].amount;
      }
    }
    return total;
  }

  getTuitionTotal() {
    var total : number;
    total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].category.toUpperCase() === "TUITION") {
          total += this.transactions[i].amount;
      }
    }
    return total;
  }

  getOtherTotal() {
      let total = 0;
      total = this.getTotal() - this.getFoodTotal() - this.getMerchandiseTotal() - this.getGroceryTotal() - this.getTuitionTotal();
    return total;
  }

}
