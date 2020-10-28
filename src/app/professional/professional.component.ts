import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../form-service.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  sub1: Subscription;
  isDataAvailable : boolean = false;
  formData: any;

  constructor( private formService : FormService) { }

  ngOnInit() {
    this.sub1 = this.formService.sharedData.subscribe(data=>{
      if(data && data != null){
      this.isDataAvailable = true;
      this.formData = data;
      console.log(this.formData)
      }
      else{
        this.isDataAvailable = false;
      }
    }) 
  }

}
