import {Component, OnInit} from "@angular/core";
import {Service} from "../core/services/service"

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit{
    datacontent;
    currentData;
    cardviewflag:boolean = true;
    listviewflag:boolean = false;
    numberOfItemsPerPage = 10;
    currentPageNumber=0;
    constructor(public data: Service){        
        
    }

    ngOnInit(){
        let selfthis = this;
        this.data.getInfo().subscribe(function (dataInfo){            
            console.log(dataInfo);
            selfthis.datacontent = dataInfo;
            console.log('inside subscribe method', this.datacontent);
        })
        setTimeout(()=>{
            console.log('setTimeout',this.datacontent);
            this.currentData = this.datacontent.map(function(x){
                console.log(x);
                console.log(x.id);
            });
            // console.log(this.currentData);
        },1000);        
    }

    onpaginationclick(val){
        console.log("In customers component " +val);
        this.currentPageNumber = val;
    }

    updateView(val){
        console.log(val);
        let value = val.target.id;
        console.log(value);
        if(value== 'cardview'){
            this.listviewflag = false;
            this.cardviewflag = true;
        }
        else if (value=='listview'){
            this.cardviewflag = false;
            this.listviewflag = true;
        }
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