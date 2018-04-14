import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITransaction } from './transaction';
import { of } from 'rxjs/observable/of';


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



  deleteTransaction(transaction : ITransaction|number):Observable<ITransaction[]>{
   
    return this._http.delete<ITransaction[]>(this.transactionsUrl);
    
   
  }
}