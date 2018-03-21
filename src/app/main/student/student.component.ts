import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  studentsArray: any[] = [];


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): any {

    this.studentForm = this.formBuilder.group({

      patientName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

      className: ['', Validators.required],

      admission: ['', Validators.required],

      parentName: ['', Validators.required],

      email: ['', Validators.compose([Validators.required, Validators.email])],

      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    })
  }

  btnClick(): any {
    
    this.studentsArray.push(this.studentForm.value);
    
    console.log(this.studentsArray);
  }
}
