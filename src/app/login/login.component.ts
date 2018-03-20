import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): any {
    this.loginForm = this.formBuilder.group({
      username: ['dental@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
    })
  }

  // Logging In

  btnClick() {
    if(this.loginForm.invalid) {
      return;
    } else {
      this.router.navigate(['/main/dashboard']);
    }
  }
}
