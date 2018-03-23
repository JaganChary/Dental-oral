import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDoctorComponent } from '../register-doctor/register-doctor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'register-doctor',
            component: RegisterDoctorComponent
          },
          {
            path : 'dentist',
            loadChildren: "app/main/dentist/dentist.module#DentistModule"
          }
        ]
      }
    ])
  ],
  declarations: [MainComponent, DashboardComponent, RegisterDoctorComponent]
})
export class MainModule { }
