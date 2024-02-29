import { Component, OnInit} from '@angular/core';
import { BankService } from './service/bank.service';
import { addbank } from './models/add-bank.model';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent implements OnInit {
  
  bankId=localStorage.getItem('bank')
  pensionerId=localStorage.getItem('pensioner')

  model:addbank;

  constructor(private bankService:BankService){
    this.model={
      bankName:'',
      accountNumber:'',
      ifscCode:'',
      branchName:'',
      panNumber:'',
      pensionerId	:this.pensionerId
    }
  }

  ngOnInit(): void {
    // console.log(this.bankId);
    // console.log(this.pensionerId)
    if(this.bankId){
      this.fetchBankDetails();
    }
  }
  fetchBankDetails(){
    this.bankService.getByBankId(this.bankId).subscribe(response =>{
      console.log(response);
      this.model= response;
    })
  }
   onBankFormSubmit(){
    if(this.bankId===''){
      this.bankService.addBankDetails(this.model).subscribe({
        next:(response)=>{
          console.log(response);
          alert("Successfully Bank Details are added");
        },
      error:(error)=>{
        console.log(error.message);
  
      }})
    }
    else{
      this.bankService.updateBankDetails(this.bankId,this.model).subscribe({
        next:(response)=>{
          console.log(response);
          alert("Successfully Bank Details are updated ");
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    
  }


}
