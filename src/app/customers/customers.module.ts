import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CustomersRouterModule } from "./customersroutes.module";


@NgModule({
    imports:[CommonModule,CustomersRouterModule]
})
export class CustomersModule{

}