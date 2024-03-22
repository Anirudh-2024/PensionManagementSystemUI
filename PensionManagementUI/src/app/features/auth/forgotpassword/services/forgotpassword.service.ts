import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forgotPassword } from '../models/forgotpassword.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http:HttpClient) { }

  forgotpassword(model:forgotPassword):Observable<forgotPassword>{
    return this.http.post<forgotPassword>(`${environment.apAuthBaseUrl}/Auth`,model)
  }

}
