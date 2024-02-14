import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavbarComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
