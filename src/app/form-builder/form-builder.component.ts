import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormService } from '../form-service.service';

@Component({
  selector: 'form-builder.component',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  resumeBuilderForm: FormGroup;
  savedList:any;
  isCheckBoxSet: boolean;
  url: any;
  constructor(
    private router: Router,
    private formBuilder : FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.resumeBuilderForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: '',
        birthDate:['', [Validators.required]],
        address:['', [Validators.required]],
        hobbies:'',
        tools:'',
       // profilePic:'',
        objective:['', [Validators.required]],
        experienceBlocks: this.formBuilder.array([this.buildExperienceBlock()]),
        educationBlocks: this.formBuilder.array([this.buildEducationBlock()])
      });
  }

  onChange(event){
    if (event.currentTarget.checked) {
      console.log("fresher");
      this.isCheckBoxSet = true;
    }
    else
      this.isCheckBoxSet = false;
  }

  // onSelectFile(event) { // called each time file input changes
  //     if (event.target.files && event.target.files[0]) {
  //       var reader = new FileReader();

  //       reader.readAsDataURL(event.target.files[0]); // read file as data url

  //       reader.onload = (event) => { // called once readAsDataURL is completed
  //         this.url = event.target["result"]
  //       }
  //     }
  // }

  buildEducationBlock(): FormGroup{
    return this.formBuilder.group({
      degree: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
     
    });
  }

  get experienceBlocks(): FormArray {
    return this.resumeBuilderForm.get('experienceBlocks') as FormArray;
  }

  addExperience() {
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }

  get educationBlocks(): FormArray {
    return this.resumeBuilderForm.get('educationBlocks') as FormArray;
  }

  addEducation() {
    this.educationBlocks.insert(0, this.buildEducationBlock());
  }

  save() {
    console.log(this.resumeBuilderForm);
    this.savedList = JSON.parse(JSON.stringify(this.resumeBuilderForm.value))
    console.log("savedList" ,this.savedList);
    if(this.savedList){
      this.formService.getFormData(this.savedList);
      this.router.navigate(['/home'])
    }
  }

}
