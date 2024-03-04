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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
