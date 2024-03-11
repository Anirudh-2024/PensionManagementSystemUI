import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PensionerPlan } from '../models/pensionerplan.model';
import { PensionRequest } from '../models/pensionrequest.model';
import { PensionResponse } from '../models/pensionresponse.model';

@Injectable({
  providedIn: 'root'
})
export class PensionerplanService {

  constructor(private http: HttpClient) { }


  getAllPensionerPlans(): Observable<PensionerPlan[]>{
    return this.http.get<PensionerPlan[]>('https://localhost:7082/api/PensionPlan/GetAllPensionPlans');

  }
  addPensionDetails(model: PensionRequest):  Observable<void>{
    return this.http.post<void>('https://localhost:7082/api/Pensioner/AddPensionerDetails',model);
  }

  getByPensionId(pensionid: string): Observable<PensionRequest>{
    return this.http.get<PensionRequest>(`https://localhost:7082/api/Pensioner/GetPensionerDetailsById?pensionerId=${pensionid}`);
  }
  updatePensionDetails(pensionid: string,model: PensionRequest): Observable<PensionRequest>{
    return this.http.put<PensionRequest>(`https://localhost:7082/api/Pensioner/UpdatePensionerDetailsById?pensionerId=${pensionid}`,model);
  }
}
