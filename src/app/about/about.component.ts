import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../form-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sub1: Subscription;
  aboutData : any;
  isDataAvailable : boolean = false;
  constructor( private formService : FormService) { }

  ngOnInit() {
    this.sub1 = this.formService.sharedData.subscribe(data=>{
      if(data && data != null){
      this.isDataAvailable = true
      this.aboutData = data;
      console.log(data)
      }
      else{
        this.isDataAvailable = false;
      }
    }) 
  }

}
