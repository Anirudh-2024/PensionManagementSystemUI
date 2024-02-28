import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PensionerPlan } from '../models/pensionerplan.model';
import { PensionRequest } from '../models/pensionrequest.model';

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
}
