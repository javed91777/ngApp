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

@NgModule({
  declarations: [
    AppComponent,MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
