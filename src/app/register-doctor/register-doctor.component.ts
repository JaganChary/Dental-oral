import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  registerDoctorForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): any {
    this.registerDoctorForm = this.formBuilder.group({

      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],

      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],

      password: ['', Validators.required]

    })
  }

  btnClick(): any {
    
    this.router.navigate(['/main/student']);
  }
}
