import { Component } from '@angular/core';
import { login } from './models/login.model';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model:login;
  token:''

  constructor(private loginService:LoginService, private router:Router){
  this.model={
    email:'',
    password:''
  }
  }
  
  onLoginFormSubmit(){
    this.loginService.loginuser(this.model).subscribe({
      next:(response)=>{
        console.log(response);
        localStorage.setItem('userId',response.id);
        localStorage.setItem('userEmail',response.email);
        localStorage.setItem('token',response['token']);
        this.router.navigate(['/'])
      },
      error:(error)=>{
        console.log(error.message);
        alert("Login Failed")
      }
    })
  }
}
    
      
    

  


