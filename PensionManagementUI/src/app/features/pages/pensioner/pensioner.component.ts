import { Component, OnInit } from '@angular/core';
import { PensionerplanService } from './services/pensionerplan.service';
import { PensionerPlan } from './models/pensionerplan.model';
import { PensionRequest } from './models/pensionrequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensioner',
  templateUrl: './pensioner.component.html',
  styleUrl: './pensioner.component.css'
})
export class PensionerComponent implements OnInit {
 
 userId= localStorage.getItem('idee');
  pensionerplan?: PensionerPlan[];
  model: PensionRequest;
  constructor(private pensionerPlanService: PensionerplanService,private router: Router){
    this.model={
      FullName: '',
      DateOfBirth: null,
      Gender: '',
      AadharNumber: '',
      PhoneNumber: '',
      Address: '',
      Age: null,
      Id: this.userId,
      PensionPlanId: ''
    }
  }
  ngOnInit(): void {
    this.pensionerPlanService.getAllPensionerPlans()
    .subscribe({
      next: (response)=>{
        this.pensionerplan=response;

      }
    });
  }
  OnBankFormSubmit(){
    this.pensionerPlanService.addPensionDetails(this.model)
    .subscribe({
      next: (response)=>{
        console.log('success');
      }
    })
  }


  

}
