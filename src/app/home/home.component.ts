import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub1: Subscription;
  formData:any;
  nameCheck : boolean=false;
  constructor(
    private router: Router,
    private formService : FormService
  ) { }

  ngOnInit() {
    this.sub1 = this.formService.sharedData.subscribe(data=>{
      if(data && data != null){
      this.nameCheck = true;
      this.formData = data;
      console.log(this.formData)
      }
      else{
        this.nameCheck = false;
      }
    }) 
  
  }

  gotToAbout(){
    this.router.navigate(['/about'])
  }

  gotToCreateForm(){
    this.router.navigate(['/form'])
  }
}
