import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService{
  sharedData= new BehaviorSubject<any>(null);
  constructor() { }

  getFormData(formData: any) {
    this.sharedData.next(formData)
}
}
