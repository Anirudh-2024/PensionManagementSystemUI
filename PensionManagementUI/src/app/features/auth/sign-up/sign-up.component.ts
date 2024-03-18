import { Component } from '@angular/core';
import { SignupService } from './service/signup.service';
import { registeruser } from './models/registeruser.model';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  model:registeruser;

  constructor(private signUpService:SignupService, private router:Router){
    this.model = {
      userName: '',
      email: '',
      password: ''
    }
  }

  onSignupFormSubmit(){
    this.signUpService.registeruser(this.model).subscribe({
      next:(response)=>{
        this.router.navigate(['/login']);
        console.log(response);

      },
      error:(error)=>{
        console.log(error.message)
        alert("Registration failed");
      }}
      );
  }
}
