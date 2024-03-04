import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addbank } from '../models/add-bank.model';
import { Observable } from 'rxjs';
import { bank } from '../models/bank.model';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  getByBankId(bankId:string): Observable<bank>{
    return this.http.get<bank>(`https://localhost:7166/api/Banking/${bankId}`);
  }
  addBankDetails(data:addbank): Observable<bank>{
    return this.http.post<bank>("https://localhost:7166/api/Banking", data);
  }
  updateBankDetails(bankId:string, data:addbank): Observable<bank>{
    return this.http.put<bank>(`https://localhost:7166/api/Banking/${bankId}`,data);
  }
}
