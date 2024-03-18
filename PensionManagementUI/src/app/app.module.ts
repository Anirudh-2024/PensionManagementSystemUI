import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { LoginComponent } from './features/auth/login/login.component';
import { BankDetailsComponent } from './features/pages/bank-details/bank-details.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './features/pages/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

import { PensionerComponent } from './features/pages/pensioner/pensioner.component';
import { GuardianComponent } from './features/pages/guardian/guardian.component';

import { FooterComponent } from './core/footer/footer.component';
import { AllDetailsComponent } from './features/pages/all-details/all-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
  }


  
]


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,  
    BankDetailsComponent,
    HomeComponent,
    NavbarComponent,  
    BankDetailsComponent,
    PensionerComponent,
    GuardianComponent,
    FooterComponent,
    AllDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UpperCasePipe,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
