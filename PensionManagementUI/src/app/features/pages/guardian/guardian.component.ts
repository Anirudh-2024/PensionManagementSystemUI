import { Component } from '@angular/core';
import { GuardianService } from './services/guardian.service';
import { GuardianRequest } from './model/guardianrequest.model';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.css'
})
export class GuardianComponent {

  userId= localStorage.getItem('idee');
  pensionerId: string | undefined;
  model: GuardianRequest;

  constructor(private guardianService: GuardianService){
    this.model={
      
      GuardianName: '',
      DateOfBirth: null,
      Relation: '',
      Age: null,
      Gender: '',
      PhoneNumber: '',
      PensionerId: '',


    }
  }
  ngOnInit(): void{
    this.guardianService.GetPensionerId(this.userId)
    .subscribe({
      next: (response)=>{
        this.pensionerId=response;
        this.model.PensionerId=this.pensionerId;
        console.log(this.pensionerId);

      }
    });
  }
  
  

  OnFormSubmit(){

    this.guardianService.addGuardian(this.model)
    .subscribe({
      next: (response)=>{
        console.log('success');
      }
    })

  }

}
