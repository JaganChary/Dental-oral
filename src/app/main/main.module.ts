import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDoctorComponent } from '../register-doctor/register-doctor.component';
import { DentistComponent } from './dentist/dentist.component';

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
          }
        ]
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'

      },
    ])
  ],
  declarations: [MainComponent, DashboardComponent, RegisterDoctorComponent, DentistComponent]
})
export class MainModule { }
