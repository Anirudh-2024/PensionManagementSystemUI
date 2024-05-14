import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PensionerPlan } from '../models/pensionerplan.model';
import { PensionRequest } from '../models/pensionrequest.model';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PensionerplanService {

  private pensionDetailsAddedSource = new BehaviorSubject<string>('');
  pensioDetailsAdded$=this.pensionDetailsAddedSource.asObservable();
  constructor(private http: HttpClient) { }
  emitPensionDetailsAdded(pensionDetails:string){
  this.pensionDetailsAddedSource.next(pensionDetails);
}

  getAllPensionerPlans(): Observable<PensionerPlan[]>{
    return this.http.get<PensionerPlan[]>(`${environment.baseurl}/gateway/pensionPlan`);

  }
  addPensionDetails(model: PensionRequest):  Observable<PensionRequest>{
    return this.http.post<PensionRequest>(`${environment.baseurl}/gateway/pensioner`,model);
  }

  getByPensionId(pensionid: string): Observable<PensionRequest>{
    return this.http.get<PensionRequest>(`${environment.baseurl}/gateway/pensioner/${pensionid}`);
  }
  updatePensionDetails(pensionid: string,model: PensionRequest): Observable<PensionRequest>{
    return this.http.put<PensionRequest>(`${environment.baseurl}/gateway/pensioner/${pensionid}`,model);
  }

  getByUserId(userId:string):Observable<string>{
    return this.http.get<string>(`${environment.baseurl}/gateway/pensioner/userId/${userId}`);
  }


}
