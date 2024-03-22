import { Component } from '@angular/core';
import { PensionDetails } from './models/pensiondetail.model';
import { AlldetailsService } from './services/alldetails.service';
import { GuardianDetails } from './models/guardiandetail.model';
import { BankingDetails } from './models/bankindetails.model';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrl: './all-details.component.css'
})
export class AllDetailsComponent {

  pensionId=localStorage.getItem('pensionerId')
  guardianId=localStorage.getItem('guardianId')
  bankId=localStorage.getItem('bankId')

  model:PensionDetails;
  guardian:GuardianDetails;
  banking:BankingDetails;

  constructor(private allDetailsService:AlldetailsService){
    this.model={
      pensionerId:null,
      fullName:'',
      dateOfBirth:'',
      gender:'',
      aadharNumber:'',
      phoneNumber:'',
      address:'',
      age:null,
      id:'',
      pensionPlanId:'',
      pensionPlanDetails:{
        pensionPlanName:'',
      }

    }
    this.guardian={
      guardianId:null,
      guardianName:'',
      dateOfBirth:null,
      relation:'',
      age:null,
      gender:'',
      phoneNumber:'',
      pensionerId:''

    }
    this.banking={
      bankId:null,
      bankName:'',
      accountNumber:'',
      ifscCode:'',
      branchName:'',
      panNumber:'',
      pensionerId:''
    }
  }
  ngOnInit(): void{
    this.allDetailsService.getPensionDetails(this.pensionId)
    .subscribe({
      next: (response)=>{
        this.model=response;
        console.log(response);
      }
    })
    this.allDetailsService.getGuardianDetails(this.guardianId)
    .subscribe({
      next: (response)=>{
        this.guardian=response;
        console.log(response);
      }
    })
    this.allDetailsService.getBankingDetails(this.bankId)
    .subscribe({
      next:(response)=>{
        this.banking=response;
        console.log(response);
      }
    })
  }

}
