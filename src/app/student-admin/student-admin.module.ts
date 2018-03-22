import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentAdminComponent } from './student-admin.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentAdminComponent,
        children: [
          {
            path: 'student',
            component: StudentComponent
          }
        ]
      }
    ])
  ],
  declarations: [ StudentAdminComponent, StudentComponent ]
})
export class StudentAdminModule { }
