import {Component, OnInit, OnChanges} from "@angular/core"
import {Service} from "../core/services/service"

@Component({
    selector: "app-orders",
    templateUrl: "orders.component.html"
})

export class OrdersComponent implements OnInit, OnChanges{
    constructor(public data: Service){}

    orders = [];
    OrdersData;
    currentData = [];

    ngOnInit(){
        let selfthis = this;

        this.data.getInfo().subscribe(function (dataInfo){
            console.log(dataInfo);
            selfthis.OrdersData = dataInfo;            
        })

        setTimeout(() =>{
            console.log("orders component on init ", this.OrdersData);
        }, 1000)
    }

    ngOnChanges(){
        this.currentData.push(this.OrdersData);
    }


}