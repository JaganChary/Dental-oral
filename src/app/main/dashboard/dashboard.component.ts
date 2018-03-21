import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  infoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.initForm();
  }

  initForm(): any {

    this.infoForm = this.formBuilder.group({

      patientName: ['', Validators.required],

      class: ['', Validators.required],

      admission: ['', Validators.required],

      parentName: ['', Validators.required],

      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],

      email: ['', Validators.compose([Validators.required, Validators.email])],

      doctorName: ['', Validators.required],

      stains: ['', Validators.required],

      plaque: ['', Validators.required],

      tartar: ['', Validators.required],

      cavities: ['', Validators.required],

      malocclusion: ['', Validators.required],

      clinical: ['', Validators.required],

      image: []
    })
  }

  btnClick(): any {
    if(this.infoForm.invalid) {

      return;
    } else {

      alert('Form Submitted Successfully');
    }
  }
} 
