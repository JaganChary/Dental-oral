import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): any {
    this.loginForm = this.formBuilder.group({
      username: ['dentist', [Validators.required, Validators.email]],
      password: ['123456', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
    })
  }

  // Logging In

  btnClick() {

    console.log(this.loginForm.get('username').value);
    if(this.loginForm.get('username').value == 'dentist' ) {

      this.router.navigate(['main','dentist']);

    } else if(this.loginForm.get('username').value == 'student-admin') {
      console.log('dfdsf');
      this.router.navigate(['/student-admin']); 

    } else if(this.loginForm.get('username').value == 'super-admin') {

      this.router.navigate(['/main/super-admin']);
    } else if(this.loginForm.get('username').value == 'patient') {

      this.router.navigate(['/main/patient']);
    }
  }
}
