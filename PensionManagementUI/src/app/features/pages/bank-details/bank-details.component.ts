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
  
  bankId=localStorage.getItem('bankId');
  pensionerId=localStorage.getItem('pensionerId')
  
  model:addbank;
  editable:boolean=true;
  inputFieldDisable:boolean=true;
  hideViewAllbutton:boolean=true;
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
    this.hideViewAllbutton=false;
     
      this.fetchBankId()
    this.pensionerId = localStorage.getItem('pensionerId');
    this.bankId=localStorage.getItem('bankId');
    
    console.log(this.bankId);
    console.log(this.pensionerId)
    
    if(this.bankId==='null' || this.bankId===null){
      this.hideViewAllbutton=true;
      
      
  }
  
  }

  fetchBankId(){
    if(this.bankId === 'null' || this.bankId===null){
      console.log(this.bankId);
      this.inputFieldDisable=false;
    }
    else
    {
      this.editable=false;
      this.inputFieldDisable=true;
      this.fetchBankDetails();
    }
  }
  onClickNav(){
    
    this.router.navigate(['/applicationForm']);

  }
  
  onBankFormSubmit(){
    if(this.bankId==='null' || this.bankId ===null){
      this.bankService.addBankDetails(this.model).subscribe({
        next:(response)=>{
          localStorage.setItem('bankId', response.bankId);
          this.inputFieldDisable=true;
          console.log(response);
          this.editable=false;
          this.model=response;
          this.hideViewAllbutton=false;
          
          
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
  onclickenable(){
    this.inputFieldDisable=false;

  }
  fetchBankDetails(){
    this.bankService.getByBankId(this.bankId).subscribe(response =>{
      console.log(response);
      this.model= response;
    })
  }
  


}
