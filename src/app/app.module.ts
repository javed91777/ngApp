import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {MenuComponent} from './core/menu.component'
import {Routes} from "@angular/router"
import {RouterModule} from "@angular/router"
import {routes} from "./app.route";

@NgModule({
  declarations: [
    AppComponent, CustomersComponent, MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
