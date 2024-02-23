import { Injectable } from '@angular/core';
import { signup } from '../models/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registeruser } from '../models/registeruser.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  registeruser(data:registeruser) : Observable<signup>{
   var responsedata = this.http.post<signup>('https://localhost:7258/api/Auth/register', data);
   return responsedata;
   
  }
}
