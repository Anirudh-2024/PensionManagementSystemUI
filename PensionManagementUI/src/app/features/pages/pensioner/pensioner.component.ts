import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  pensionerId :string=''
  userId= localStorage.getItem('userId');
  pensionerplan?: PensionerPlan[];
  model: PensionRequest;
  editable:boolean=true;
  hidebutton:boolean=true;
  inputFieldDisable:boolean=true;
  constructor(private pensionerPlanService: PensionerplanService,private router: Router){
    this.model={
      pensionerId:'',
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
    this.fetchpensionerId();   
    this.pensionerPlanService.getAllPensionerPlans()
    .subscribe({
      next: (response)=>{
        this.pensionerplan=response;
      }
    });
  }
onclickenable(){
    this.inputFieldDisable=false;
  }
fetchpensionerId(){
  this.pensionerPlanService.getByUserId(this.userId).subscribe({
    next:(response)=>{
      this.pensionerId=response;
      console.log("PensionerId", this.pensionerId);
      if(this.pensionerId=== null){
        this.inputFieldDisable=false;
      }
      else{
        this.editable=false;
        this.inputFieldDisable=true;
        this.fetchpensionerdetail();
      } 
    }
  })
}
fetchpensionerdetail()
  {
    this.pensionerPlanService.getByPensionId(this.pensionerId)
    .subscribe({
      next: (response)=>{
       console.log(response);
       this.model=response;
       const rawDate=response.dateOfBirth;
       const parseDate=new Date(rawDate);
       this.model.dateOfBirth=formatDate(parseDate,'yyyy-MM-dd','en-US');
      console.log(this.model);
      }
    })
  }
  onClickNav(){ 
    this.router.navigate(['/guardianDetails']); 
  }
  OnBankFormSubmit(){
    if(this.pensionerId===null)
    {
      this.pensionerPlanService.addPensionDetails(this.model)
      .subscribe({
        next: (response)=>{
          localStorage.setItem('pensionerId',response.pensionerId);
          console.log(response);
          const penId = localStorage.getItem('pensionerId');
          this.pensionerPlanService.emitPensionDetailsAdded(penId);
          this.inputFieldDisable=true;
          this.editable=true;
          this.model=response;
          this.hidebutton=false;
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
          alert("Successfully Pensioner Details are updated ");
          this.router.navigate(['/applicationForm']);
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
  }
}
