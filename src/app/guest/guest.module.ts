import { NgModule } from "@angular/core";
import { GuestComponent } from "./guest.component";
import { RouterModule } from "@angular/router"; 
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
     imports : [ 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forChild([
         {
             path : '',
             component : GuestComponent
         }
     ]),
     CommonModule
    ],
     declarations : [ GuestComponent ] 
})
export class GuestModule{

}