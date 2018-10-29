import {Component, OnInit, OnChanges} from "@angular/core";
import {RestService} from "./restService"

@Component({
    selector: 'app-RestTestComponent',
    templateUrl: 'RestTest.component.html'
})

export class RestTestComponent implements OnInit, OnChanges{

    reqData;
    currentData = [];
    
    constructor(public restServ: RestService){        
        
    }

    ngOnInit(){
        let selfthis = this;
        this.restServ.getData().subscribe(function(data1){
            console.log(data1);
            selfthis.reqData = data1;
            console.log('inside ', this.reqData);
        })
        setTimeout(() => {
            console.log('set timeout ', this.reqData);
            console.log(this.reqData.data);
            this.currentData.push(this.reqData.data);
        },5000);             
    }

    ngOnChanges(){
        this.currentData.push(this.reqData.data);
        console.log(this.currentData);
    }
}