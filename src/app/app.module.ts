import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {MenuComponent} from './core/menu.component'
import {Routes} from "@angular/router"
import {RouterModule} from "@angular/router"
import {OrdersComponent} from "./orders/orders.component"
import {FormsModule} from "@angular/forms"
import {RouteModule} from "./app.route"
import {CoreModule} from "./core/core.module"
import {HttpClientModule} from "@angular/common/http"
import {Service} from "./core/services/service"
import {CommonModule} from "@angular/common"
import {LoginFormModule} from "./forms/login-form/login-form.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouteModule, CoreModule, HttpClientModule, LoginFormModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
