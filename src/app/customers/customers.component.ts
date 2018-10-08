import {Component, OnInit} from "@angular/core";
import {Service} from "../core/services/service"

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit{
    datacontent;
    currentData;
    constructor(public data: Service){        
        
    }

    ngOnInit(){
        let selfthis = this;
        this.data.getInfo().subscribe(function (dataInfo){            
            console.log(dataInfo);
            selfthis.datacontent = dataInfo;
            console.log('inside subscribe method', this.datacontent);
        })
        setTimeout(()=>{console.log('setTimeout',this.datacontent)},1000);        
    }

    obj ={
        name: 'Ravi'
    }
    age = 10;
    newAge;
    changeAge(){
        this.age= this.newAge;
    }

}