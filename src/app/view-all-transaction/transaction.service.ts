import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITransaction } from './transaction';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class TransactionsService {

  private transactionsUrl = 'https://mrsawada-accounting-api.azurewebsites.net/api/transactions';

  constructor( private _http: HttpClient) { }

  getTransactions(): Observable<ITransaction[]> {
    return this._http.get<ITransaction[]>(this.transactionsUrl);
  }

  postTransaction(transaction : ITransaction): Observable<ITransaction[]> {
    return this._http.post<ITransaction[]>(this.transactionsUrl, transaction);
  }

  deleteTransaction(id : number): Observable<ITransaction[]> {
    var mystring = id.toString();
    return this._http.delete<ITransaction[]>(this.transactionsUrl + "/" + mystring);
  }

}