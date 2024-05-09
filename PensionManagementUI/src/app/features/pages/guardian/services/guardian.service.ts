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

    return this.http.get<any>(`${environment.baseurl}/gateway/pensioner/userId/${userId}`);

  }
  addGuardian(model: GuardianResponse): Observable<GuardianResponse>{

    return this.http.post<GuardianResponse>(`${environment.baseurl}/gateway/guardian`,model);
  }

  getguardianIdByPensionerId(pensionerId: string):Observable<string>{
    return this.http.get<string>(`${environment.baseurl}/gateway/guardian/pensionerId/${pensionerId}`)
  }

  getguardianByGuardianId(guardianId: string):Observable<GuardianResponse>{
    return this.http.get<GuardianResponse>(`${environment.baseurl}/gateway/guardian/${guardianId}`)
  }

  updateGuardianDetails(guardianid:string,model:GuardianResponse):Observable<GuardianResponse>{
    return this.http.put<GuardianResponse>(`${environment.baseurl}/gateway/guardian/${guardianid}`,model)
  }
}
