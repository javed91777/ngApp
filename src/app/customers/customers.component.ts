import {Component} from "@angular/core";
import {Service} from "../core/services/service"

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent{
    constructor(public data: Service){
        this.data.getInfo().subscribe(function dataInfo{
            console.log(dataInfo);
        })
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