import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensionDetails } from '../models/pensiondetail.model';
import { Observable } from 'rxjs';
import { GuardianDetails } from '../models/guardiandetail.model';
import { BankingDetails } from '../models/bankindetails.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlldetailsService {

  constructor(private http: HttpClient) { }


  getPensionDetails(pensionid: string): Observable<PensionDetails>{

    return this.http.get<PensionDetails>(`${environment.pensionBaseUrl}/api/Pensioner/GetPensionerDetailsById?pensionerId=${pensionid}`)


  }
  getGuardianDetails(guardianid: string): Observable<GuardianDetails>{

    return this.http.get<GuardianDetails>(`${environment.guardianBaseUrl}/api/Guardian/GetGuardianDetailsById?guardianId=${guardianid}`)

  }
  getBankingDetails(bankid: string): Observable<BankingDetails>{
    return this.http.get<BankingDetails>(`${environment.bankingBaseUrl}/api/Banking/${bankid}`)
  }

}
