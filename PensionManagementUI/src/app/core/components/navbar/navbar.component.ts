import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  userId=''
  pensionerId='';
 
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    
    console.log(this.userId);
  }
constructor(private router:Router){}

hideLoginbutton(){
 localStorage.clear()
 this.router.navigate(['/login']);
 
}
disableaddDetailsoption(){
  if(this.userId===null ){
    return true;
  }
}

disableoption(){
  if(this.pensionerId==="" ){
    return true;
  }
}
}

