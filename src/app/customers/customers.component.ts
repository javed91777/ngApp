import {Component} from "@angular/core";

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent{
    obj ={
        name: 'Ravi'
    }
    age = 10;
    newAge;
    changeAge(){
        this.age= this.newAge;
    }

}