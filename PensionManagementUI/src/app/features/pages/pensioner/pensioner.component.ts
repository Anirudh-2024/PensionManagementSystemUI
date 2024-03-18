import { Component, OnInit } from '@angular/core';
import { PensionerplanService } from './services/pensionerplan.service';
import { PensionerPlan } from './models/pensionerplan.model';
import { PensionRequest } from './models/pensionrequest.model';
import { Router } from '@angular/router';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-pensioner',
  templateUrl: './pensioner.component.html',
  styleUrl: './pensioner.component.css'
})
export class PensionerComponent implements OnInit {
 

 pensionerId=localStorage.getItem('pensioner')

 userId= localStorage.getItem('userId');

  pensionerplan?: PensionerPlan[];
   
  model: PensionRequest;
  editable:boolean=true;
  inputFieldDisable:boolean=true;
  constructor(private pensionerPlanService: PensionerplanService,private router: Router){
    this.model={
      fullName: '',
      dateOfBirth: null,
      gender: '',
      aadharNumber: '',
      phoneNumber: '',
      address: '',
      age: null,
      id: this.userId,
      pensionPlanId: ''
    }
  }
  ngOnInit(): void {
        this.pensionerPlanService.getAllPensionerPlans()
    .subscribe({
      next: (response)=>{
        this.pensionerplan=response;

      }
    });
    if(this.pensionerId!=='')
    {
      this.editable=false;
      this.inputFieldDisable=true;
      this.fetchpensionerdetail();
    }
  }
  onclickenable(){
    this.inputFieldDisable=false;

  }
  fetchpensionerdetail()
  {
    this.pensionerPlanService.getByPensionId(this.pensionerId)
    .subscribe({
      next: (response)=>{
       this.model=response;
       const rawDate=response.dateOfBirth;
       const parseDate=new Date(rawDate);
       this.model.dateOfBirth=formatDate(parseDate,'yyyy-MM-dd','en-US');
        console.log(this.model);

       
        localStorage.setItem('pensionerId','pensionerId')
        this.router.navigate(['/bankDetails']);
      }
    })
  }
  
  OnBankFormSubmit(){
    if(this.pensionerId==='')
    {
      this.pensionerPlanService.addPensionDetails(this.model)
      .subscribe({
        next: (response)=>{
          this.inputFieldDisable=true;
          console.log(response);
        },
        error:(error)=>{
          console.log(error.message);
        }
      })

    }
    else{
      this.pensionerPlanService.updatePensionDetails(this.pensionerId,this.model)
      .subscribe({
        next: (response)=>{
          this.inputFieldDisable=true;
          alert("Successfully Bank Details are updated ");
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    
  }


  

}
