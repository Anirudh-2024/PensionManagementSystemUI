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

  pensionId=localStorage.getItem('pension')
  guardianId=localStorage.getItem('guardian')
  bankId=localStorage.getItem('bank')

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
    // localStorage.setItem('pension', '2E209298-914E-4FF7-A8F2-3F317B112C0B')
    // localStorage.setItem('guardian', '5CBB6934-49C9-45B1-B23C-7615199BEEB7')
    // localStorage.setItem('bank', '')
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
