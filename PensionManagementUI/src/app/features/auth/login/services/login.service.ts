import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/login.model';
import { Observable } from 'rxjs';
import { loginresponse } from '../models/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginuser(data: login):Observable<loginresponse>{
    return this.http.post<loginresponse>('https://localhost:7258/api/Auth/login',data);
  }

}
