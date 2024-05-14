import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlldetailsService } from '../../../features/pages/all-details/services/alldetails.service';
import { PensionerplanService } from '../../../features/pages/pensioner/services/pensionerplan.service';
import { BankService } from '../../../features/pages/bank-details/service/bank.service';
import { GuardianService } from '../../../features/pages/guardian/services/guardian.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  userId=''
  pensionerId='';
  guardianId='';
  bankId=''
  private subscription:Subscription;
  receivedPensionDetails:string='';
 
  ngOnInit(): void {
    
    this.userId = localStorage.getItem('userId');
    console.log('userId',this.userId);
    this.getpensionerId();
    setTimeout(() => {
      this.pensionerId = localStorage.getItem('pensionerId');
      console.log("pensionerId",this.pensionerId);
      this.getguardianId();
      this.guardianId = localStorage.getItem('guardianId');
      this.getBankId();
      this.bankId= localStorage.getItem('bankId');
    }, 2000);
   }
constructor(private router:Router, private alldetails: AlldetailsService, private pensionerDetails:PensionerplanService, private guardianSerive:GuardianService, private BankDetails:BankService){
  this.subscription = this.pensionerDetails.pensioDetailsAdded$.subscribe((details)=>{
    this.receivedPensionDetails=details;
    console.log("return value",this.receivedPensionDetails);
  })
} 

hideLoginbutton(){
 localStorage.clear()
 this.router.navigate(['/login']);
 
}
disableaddDetailsoption(){
  if(this.userId===null ){
    return true;
  }
}
getpensionerId(){
  this.pensionerDetails.getByUserId(this.userId).subscribe({
    next:(response) => {
      if(response!==null){
        localStorage.setItem('pensionerId',response);
      }
      else{
        console.log(response)
      }
      error:(error)=>{
        console.log('');
      }
    },
  })}
getguardianId(){
  this.guardianSerive.getguardianIdByPensionerId(this.pensionerId)
  .subscribe({
    next:(response)=>{
      if(response!==null){
        localStorage.setItem('guardianId',response)
        console.log("guardianId",response)
      }
      else{
        console.log('');
      } 
    },
    error:(error)=>{
      console.log('');
    }
  })
}
getBankId(){
  this.BankDetails.getBankIdByPensionerId(this.pensionerId).subscribe({
    next:(response)=>{
      if(response!==null){
        localStorage.setItem('bankId',response);
        console.log("bankId",response);
      }
      else{
        console.log('');
      }
    },
    error:(error)=>{
      console.log('');
    }
  })
}
disableoption(){

  if(this.pensionerId===null ){
    if(this.receivedPensionDetails === ''){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
}

