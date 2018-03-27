import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { KonnectAdminComponent } from "./konnect-admin.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations : [ KonnectAdminComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
        {
            path : '',
            component : KonnectAdminComponent
        }
    ])]
})
export class KonnectAdminModule{

}