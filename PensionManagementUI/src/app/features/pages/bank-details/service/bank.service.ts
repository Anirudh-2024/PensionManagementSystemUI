import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addbank } from '../models/add-bank.model';
import { Observable } from 'rxjs';
import { bank } from '../models/bank.model';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  getByBankId(bankId:string): Observable<bank>{
    return this.http.get<bank>(`${environment.apiBankBaseUrl}/Banking/${bankId}`);
  }
  addBankDetails(data:addbank): Observable<bank>{
    return this.http.post<bank>(`${environment.apiBankBaseUrl}/Banking`, data);
  }
  updateBankDetails(bankId:string, data:addbank): Observable<bank>{
    return this.http.put<bank>(`${environment.apiBankBaseUrl}/Banking/${bankId}`,data);
  }
  getBankIdByPensionerId(pensionerId:string):Observable<string>{
    return this.http.get<string>(`${environment.apiBankBaseUrl}/Banking/GetBankIdByPensionerId?pensionerId=${pensionerId}`);
  }
}
