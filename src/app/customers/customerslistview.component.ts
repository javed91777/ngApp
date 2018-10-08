import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-CustomersListViewComponent',
    templateUrl:'customerslistview.component.html'
})
export class CustomersListViewComponent{
    @Input() custData;
    custData1;

    constructor(){
        console.log(this.custData);
    }
    
    
    
}