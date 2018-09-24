import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {customerManagerPortalNavbar} from './customerManagerPortalNavbar/customerManagerPortalNavbar.component';

@NgModule({
  declarations: [
    AppComponent, CustomersComponent, customerManagerPortalNavbar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
