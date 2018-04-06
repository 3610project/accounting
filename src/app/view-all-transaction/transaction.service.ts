import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITransaction } from './transaction';

@Injectable()
export class TransactionsService {

  private transactionsUrl = 'https://mrsawada-accounting-api.azurewebsites.net/api/transactions';

  constructor( private _http: HttpClient) { }

  getTransactions(): Observable<ITransaction[]> {
    return this._http.get<ITransaction[]>(this.transactionsUrl);
  }
  deleteTransactions(transaction:ITransaction): Observable<ITransaction[]> {
    return this._http.delete<ITransaction[]>(this.transactionsUrl);
}
  





}