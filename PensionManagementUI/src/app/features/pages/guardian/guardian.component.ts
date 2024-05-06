import { Component } from '@angular/core';
import { GuardianService } from './services/guardian.service';
import { GuardianRequest } from './model/guardianrequest.model';
import { Router } from '@angular/router';
import { GuardianResponse } from './model/guardianresponse.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.css'
})
export class GuardianComponent {

  userId= localStorage.getItem('userId');
  pensionerId =localStorage.getItem('pensionerId')
  
  guardianId:string='';
  editable:boolean=true;
  inputFieldDisable:boolean=true;
  hidebutton:boolean=true;
  response:GuardianResponse;

  constructor(private guardianService: GuardianService, private router:Router){

    this.response={
      guardianId:'',
      guardianName: '',
      dateOfBirth: null,
      relation: '',
      age: null,
      gender: '',
      phoneNumber: '',
      pensionerId: this.pensionerId,

    }
  }
  ngOnInit(): void{
    this.fetchguardianId();
    this.guardianId=localStorage.getItem('guardianId')
    console.log(this.guardianId)
    console.log(this.pensionerId)

  }
  onclickenable(){
    this.inputFieldDisable=false;

  }
  fetchguardianId(){
    this.guardianService.getguardianIdByPensionerId(this.pensionerId)
    .subscribe({
      next:(response)=>
      {
        localStorage.setItem('guardianId',response);
        if(response=== null){
          this.inputFieldDisable=false;
        }
        else{
          this.editable=false;
          this.inputFieldDisable=true;
          this.fetchguardiandetail();
        }
      }
    })
  }
  fetchguardiandetail()
  {
    this.guardianService.getguardianByGuardianId(this.guardianId)
    .subscribe({
      next:(response)=>
      {
        this.response=response;
        const rawDate=response.dateOfBirth;
        const parseDate=new Date(rawDate);
        this.response.dateOfBirth =formatDate(parseDate,'yyyy-MM-dd','en-US');
        console.log(this.response);
      }
    })
  }
  
  onClickNav(){
    this.router.navigate(['/bankDetails']);
  }

  OnFormSubmit(){
    if(this.guardianId=== null || this.guardianId==='null')
    {
      this.guardianService.addGuardian(this.response)
      .subscribe({
        next: (response)=>{
          localStorage.setItem('guardianId', response.guardianId);
          this.inputFieldDisable=true;
          console.log('success');
          this.editable=true;
          this.response=response;
          this.hidebutton=false;

        }
      })
    }

    else{
      this.guardianService.updateGuardianDetails(this.guardianId,this.response)
      .subscribe({
        next: (response)=>{
          this.inputFieldDisable=true;
          alert("Successfully Guardian Details are updated ");
          this.router.navigate(['/applicationForm']);
        },
        error:(error)=>{
          console.log(error);
        }
      }) 
    }
  }

}
