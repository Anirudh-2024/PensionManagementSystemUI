import { Component } from '@angular/core';
import { forgotPassword } from './models/forgotpassword.model';
import { ForgotpasswordService } from './services/forgotpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  model:forgotPassword;
  constructor( private forgotPassword:ForgotpasswordService){
    this.model={
      email:'',
      password:''
    }
  }
  onforgotPasswordFormSubmit(){
 this.forgotPassword.forgotpassword(this.model).subscribe({
  next:(response)=>{
    console.log(response);
    alert('New Password is updated successfully');

  },
  error:(error)=>{
    console.log(error.message)
    alert("Incorrect Email Address");
  }
  }
 )}}