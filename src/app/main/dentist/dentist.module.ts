import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { DentistComponent } from './dentist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : DentistComponent
      }
    ])
  ],
  declarations: [ DentistComponent ]
})
export class DentistModule { }
