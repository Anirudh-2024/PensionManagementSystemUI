import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuardianRequest } from '../model/guardianrequest.model';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  

  constructor(private http: HttpClient) { }

  GetPensionerId(userId: string): Observable<any>{

    return this.http.get<any>(`https://localhost:7082/api/Pensioner/GetPensionerIdById?userId=${userId}`);

  }
  addGuardian(model: GuardianRequest): Observable<void>{

    return this.http.post<void>('https://localhost:7082/api/Guardian/AddGuardianDetails',model);
  }
}
