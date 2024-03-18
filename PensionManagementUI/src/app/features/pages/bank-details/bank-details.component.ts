import { Component, OnInit} from '@angular/core';
import { BankService } from './service/bank.service';
import { addbank } from './models/add-bank.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent implements OnInit {
  
  bankId=localStorage.getItem('bank')
  pensionerId=localStorage.getItem('pensionerId')

  model:addbank;
  editable:boolean=true;
  inputFieldDisable:boolean=true;
  
  constructor(private bankService:BankService, private router:Router){
    this.model={
      bankName:'',
      accountNumber:'',
      ifscCode:'',
      branchName:'',
      panNumber:'',
      pensionerId	:this.pensionerId,
    }
  }

  ngOnInit(): void {
    localStorage.setItem('bank','bankId')
    this.inputFieldDisable=false;
    if(this.bankId!==null){
      this.editable=false;
      this.inputFieldDisable=true;
      this.fetchBankDetails();
    }
  }
  onclickenable(){
    this.inputFieldDisable=false;

  }
  fetchBankDetails(){
    this.bankService.getByBankId(this.bankId).subscribe(response =>{
      console.log(response);
      this.model= response;
    })
  }
   onBankFormSubmit(){
    if(this.bankId===null){
      this.bankService.addBankDetails(this.model).subscribe({
        next:(response)=>{
          this.inputFieldDisable=true;
          console.log(response);
          alert("Successfully Bank Details are added");
          this.router.navigate(['/guardianDetails'])
        },
      error:(error)=>{
        console.log(error.message);
  
      }})
    }
    else{
      this.bankService.updateBankDetails(this.bankId,this.model).subscribe({
        next:(response)=>{
          console.log(response);
          this.inputFieldDisable=true;
          alert("Successfully Bank Details are updated ");
          this.router.navigate(['/applicationForm']);
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    
  }


}
