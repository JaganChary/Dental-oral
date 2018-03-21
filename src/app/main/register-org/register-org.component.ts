import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgForm,
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register-org.component.html',
  styleUrls: ['./register-org.component.css']
})

export class RegisterOrgComponent implements OnInit {
  registerForm: FormGroup;
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      organization: ['', Validators.required],

      type: ['', Validators.required],

      fullname: ['', [Validators.required, Validators.minLength(4)]],

      email: ['', Validators.compose([Validators.required, Validators.email])],

      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],

      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  btnClick = () => {
    this.router.navigate(['/main/student'])
  }
}
