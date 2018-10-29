import {Component, OnInit, OnChanges} from "@angular/core"
import {Service} from "../core/services/service"

@Component({
    selector: "app-orders",
    templateUrl: "orders.component.html"
})

export class OrdersComponent implements OnInit{
    constructor(public data1: Service){
        console.log(data1);
    }

    orders = [];
    OrdersData;
    currentData = [];
    currentOrders = [];
    ordersImagePath= "../assets/images/orders.png";

    ngOnInit(){
        let selfthis = this;

        this.data1.getInfo().subscribe(function (dataInfo){
            console.log(dataInfo);
            selfthis.OrdersData = dataInfo;            
        })

        setTimeout(() =>{
            console.log("orders component on init ", this.OrdersData);
            selfthis.currentData.push(this.OrdersData);
            console.log(this.currentData);
        }, 1000)        
    }

    // ngOnChanges(){
    //     this.currentData.push(this.OrdersData);
    //     console.log(this.currentData);
    // }


}