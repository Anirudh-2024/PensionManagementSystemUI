import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { PensionerComponent } from './features/pages/pensioner/pensioner.component';
import { BankDetailsComponent } from './features/pages/bank-details/bank-details.component';
import { GuardianComponent } from './features/pages/guardian/guardian.component';
import { AllDetailsComponent } from './features/pages/all-details/all-details.component';
import { ForgotpasswordComponent } from './features/auth/forgotpassword/forgotpassword.component';

const routes:Routes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignUpComponent
  },
  {
    path:'pensionerDetails', component:PensionerComponent
  },
  {
    path:'bankDetails', component:BankDetailsComponent
  },
  {
    path:'guardianDetails', component:GuardianComponent
  },
  {
    path:'applicationForm', component:AllDetailsComponent
  },
  {
    path:'forgotPassword', component:ForgotpasswordComponent
  }

 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
