import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { RegisterOrgComponent } from './register-org/register-org.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'register-org',
        component: RegisterOrgComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
        
      },
    ])
  ],
  declarations: [MainComponent, DashboardComponent, StudentComponent, RegisterOrgComponent]
})
export class MainModule { }
