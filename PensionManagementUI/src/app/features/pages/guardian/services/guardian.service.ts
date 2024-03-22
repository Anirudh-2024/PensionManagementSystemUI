import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuardianRequest } from '../model/guardianrequest.model';
import { environment } from '../../../../../environments/environment';
import { GuardianResponse } from '../model/guardianresponse.model';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  

  constructor(private http: HttpClient) { }

  GetPensionerId(userId: string): Observable<any>{

    return this.http.get<any>(`${environment.guardianBaseUrl}/api/Pensioner/GetPensionerIdById?userId=${userId}`);

  }
  addGuardian(model: GuardianResponse): Observable<GuardianResponse>{

    return this.http.post<GuardianResponse>(`${environment.guardianBaseUrl}/api/Guardian/AddGuardianDetails`,model);
  }

  getguardianIdByPensionerId(pensionerId: string):Observable<string>{
    return this.http.get<string>(`${environment.guardianBaseUrl}/api/Guardian/GetGuardianIdByPensionerId?pensionerId=${pensionerId}`)
  }

  getguardianByGuardianId(guardianId: string):Observable<GuardianResponse>{
    return this.http.get<GuardianResponse>(`${environment.guardianBaseUrl}/api/Guardian/GetGuardianDetailsById?guardianId=${guardianId}`)
  }

  updateGuardianDetails(guardianid:string,model:GuardianResponse):Observable<GuardianResponse>{
    return this.http.put<GuardianResponse>(`${environment.guardianBaseUrl}/api/Guardian/UpdateGuardianById?guardianId=${guardianid}`,model)
  }
}
