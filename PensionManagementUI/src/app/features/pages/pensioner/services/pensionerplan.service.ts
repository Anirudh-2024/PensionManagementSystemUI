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
    return this.http.get<PensionerPlan[]>(`${environment.pensionBaseUrl}/api/PensionPlan/GetAllPensionPlans`);

  }
  addPensionDetails(model: PensionRequest):  Observable<PensionRequest>{
    return this.http.post<PensionRequest>(`${environment.pensionBaseUrl}/api/Pensioner/AddPensionerDetails`,model);
  }

  getByPensionId(pensionid: string): Observable<PensionRequest>{
    return this.http.get<PensionRequest>(`${environment.pensionBaseUrl}/api/Pensioner/GetPensionerDetailsById?pensionerId=${pensionid}`);
  }
  updatePensionDetails(pensionid: string,model: PensionRequest): Observable<PensionRequest>{
    return this.http.put<PensionRequest>(`${environment.pensionBaseUrl}/api/Pensioner/UpdatePensionerDetailsById?pensionerId=${pensionid}`,model);
  }

  getByUserId(userId:string):Observable<string>{
    return this.http.get<string>(`${environment.pensionBaseUrl}/api/Pensioner/GetPensionerIdById?userId=${userId}`);
  }


}
